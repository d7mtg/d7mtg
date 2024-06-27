import { Footer, Topbar } from 'components'
import Head from 'next/head'
import Link from 'next/link'
import { getProjects, url } from 'utils/backend'
import p from './ProjectBlock.module.scss'
import s from './index.module.scss'

export default function Portfolio({ projects }) {
    return <>
        <Head>
            <title>D7mtg | Brooklyn UX Design Agency | Portfolio</title>
        </Head>

        <Topbar />

        <div className={s.root}>
            {projects.map(p => <ProjectBlock key={p.slug} {...p} />)}
        </div>

        <Footer />
    </>
}

export const ProjectBlock = props => {
    const {
        slug,
        logo,
        logoDark
    } = props

    return <>
        <Head>
            {logo && <link href={url(logo)} rel='preload' as='image' media='not (prefers-color-scheme: dark)' />}
            {logoDark && <link href={url(logoDark)} rel='preload' as='image' media='(prefers-color-scheme: dark)' />}
        </Head>
        <Link href={'/portfolio/projects/' + slug}>
            <div className={p.root}>
                <div className={p.imageContainer}>
                    <picture>
                        {logoDark && <source srcSet={url(logoDark)} media='(prefers-color-scheme: dark)' />}
                        <img className={p.image} src={logo && url(logo)} alt={logo?.alt} />
                    </picture>
                </div>
            </div>
        </Link>
    </>
}

export const getStaticProps = async () => {
    let projects = await getProjects()
    projects = projects.filter(p => p.portfolioVisible)
    projects.sort((a, b) => a.portfolioIndex - b.portfolioIndex)

    return {
        props: {
            projects
        }
    }
}