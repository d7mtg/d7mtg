import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, NumberField, Switch } from 'components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { deleteProject, getProjects, revalidate, setProject } from 'utils/backend'
import { protect } from 'utils/protect'
import s from './admin.module.scss'

function Admin({ projects: initialProjects }) {
    const router = useRouter()

    const form = useForm({
        defaultValues: {
            projects: initialProjects
        }
    })

    const { control, register, handleSubmit, reset, formState: { isDirty } } = form
    const [publishing, setPublishing] = useState(false)

    const submitOrder = async ({ projects }) => {
        setPublishing(true)

        const toRevalidate = []

        for (const p of projects) {

            const initial = initialProjects.find(ip => ip.slug === p.slug)
            if (!initial)
                continue

            if (p.homeVisible !== initial.homeVisible ||
                p.portfolioVisible !== initial.portfolioVisible ||
                p.homeIndex !== initial.homeIndex ||
                p.portfolioIndex !== initial.portfolioIndex) {

                await setProject(p.slug, {
                    ...p,
                    homeIndex: Number(p.homeIndex),
                    portfolioIndex: Number(p.portfolioIndex)
                })
                toRevalidate.push(p)
            }
        }

        for (const toDelete of initialProjects) {
            if (!projects.find(p => p.slug === toDelete.slug)) {
                await deleteProject(toDelete.slug)
                toRevalidate.push(toDelete.slug)
            }
        }

        revalidate({
            projects: toRevalidate,
            home: true,
            portfolio: true,
            notFound: true
        })

        setPublishing(false)
        router.replace(router.asPath)
        reset({ projects })
    }

    const handleDiscard = e => {
        reset()
    }

    const { fields, remove } = useFieldArray({
        name: 'projects',
        control
    })

    return <form className={s.form} onSubmit={handleSubmit(submitOrder)}>
        <Head>
            <title>Admin | Dashboard</title>
        </Head>


        <div className={s.tableContainer}>
            <div className={s.innerContainer}>

                <div className={s.topBar}>
                    <h2>{initialProjects.length} Project{initialProjects.length === 1 ? '' : 's'}</h2>

                    {isDirty && <Button type='button' variant='secondary' onClick={handleDiscard}>
                        Discard
                    </Button>}
                    {isDirty && <Button type='submit'>
                        Publish{publishing && 'ing...'}
                    </Button>}
                    {!isDirty && <Button type='button' variant='secondary' onClick={e => router.push('/admin/new')}>
                        <FontAwesomeIcon icon='add' />&nbsp;&nbsp;&nbsp;New Project
                    </Button>}
                </div>

                <table>
                    <colgroup>
                        <col className={s.name} />
                        <col className={s.homeVisible} />
                        <col className={s.portfolioVisible} />
                        <col className={s.homeIndex} />
                        <col className={s.portfolioIndex} />
                        <col className={s.images} />
                        <col className={s.controls} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th >Name</th>
                            <th >Home page</th>
                            <th >Portfolio page</th>
                            <th >Position on Home page</th>
                            <th>Position on Portfolio page</th>
                            <th >Images</th>
                        </tr>
                    </thead>
                    <tbody>

                        {fields.map((p, index) => {
                            return <tr key={p.id}>
                                <td>
                                    <div className={s.flex}>
                                        <div className={s.thumbnail}>
                                            <img src={p.logo?.url} alt={p.logo?.alt} />
                                        </div>
                                        <span>{p.name}</span>
                                    </div>
                                </td>
                                <td>
                                    <Switch {...register(`projects.${index}.homeVisible`)} />
                                </td>
                                <td>
                                    <Switch {...register(`projects.${index}.portfolioVisible`)} />
                                </td>
                                <td>
                                    <NumberField {...register(`projects.${index}.homeIndex`)} />
                                </td>
                                <td>
                                    <NumberField {...register(`projects.${index}.portfolioIndex`)} />
                                </td>
                                <td>
                                    <span>{p.images.length}</span>
                                </td>
                                <td>
                                    <div className={s.flex}>
                                        <Button variant='flat-icon' disabled={isDirty} type='button' onClick={e => router.push('/admin/edit/' + p.slug)}>
                                            <FontAwesomeIcon icon={['fal', 'pen']} />
                                        </Button>
                                        <Button variant='flat-icon' type='button' onClick={e => remove(index)}>
                                            <FontAwesomeIcon icon={['fal', 'trash']} />
                                        </Button>
                                        <Button variant='flat-icon' disabled={isDirty} type='button' onClick={e => router.push('/portfolio/projects/' + p.slug)}>
                                            <FontAwesomeIcon icon={['fal', 'eye']} />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </form>
}

export default protect(Admin)

export const getServerSideProps = async () => {
    const projects = await getProjects()

    return {
        props: {
            projects
        }
    }
}