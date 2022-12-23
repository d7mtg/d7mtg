
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logo } from 'components'
import LightGallery from 'lightgallery/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getProject, getProjects, url } from 'utils/backend'
import s from './project.module.scss'

export default function Project({ project }) {
    const {
        name,
        metaDescription,
        previewImage
    } = project

    return <>
        <Head>
            <title>{name + ' | Project by D7mtg'}</title>
            <meta key="ogtitle" property="og:title" content={`D7mtg | ${name}`} />
            <meta key='description' name="description" content={metaDescription} />
            <meta key="ogdescription" property="og:description" content={metaDescription} />
            <meta key="twitterimage" property="twitter:image" content={previewImage?.url} />
            <meta key="twittertitle" property="twitter:title" content={`D7mtg | ${name}`} />
            <meta key="twitterdescription" property="twitter:description" content={metaDescription} />
            <meta key="twitterimage" property="twitter:image" content={previewImage?.url} />
        </Head>

        <div className={s.logoContainer} >
            <Link href='/'>
                <Logo className={s.logo} />
            </Link>
        </div>
        <div className={s.line} />

        <Blog {...project} />
    </>
}

export const Blog = props => {
    const {
        name,
        projectDescription,
        logo,
        labels,
        images,
        links
    } = props

    return <>
        <div className={s.blog}>
            <span className={s.title}>
                <Link id="back" href="/portfolio">
                    <FontAwesomeIcon icon={['fal', 'chevron-left']} />
                </Link>
                <h1>{name}</h1>
            </span>
            <div className={s.labels}>
                {labels?.map(({ text, icon, variant = 'fal' }) => <label key={text}>
                    <FontAwesomeIcon icon={[variant, icon]} />{text}
                </label>)}
            </div>
            <div className={s.body}>
                <ReactMarkdown>{projectDescription}</ReactMarkdown>
            </div>
            {links?.length > 0 && <div className={s.links}>
                {links.map(({ url, icon, variant = 'far', text }) => <a key={url} className={s.button} href={url}>
                    <FontAwesomeIcon icon={[variant, icon]} />
                    &nbsp;&nbsp;{text}
                </a>)}
            </div>}

        </div>
        <LightGallery
            licenseKey='E6B71A52-081F42BE-9A18C3F9-82A1B717'
            speed={200}
            download={false}
            getCaptionFromTitleOrAlt={false}
            mousewheel>
            {logo && <Image className={s.allphotos} src={url(logo)} alt={logo.alt} width={logo.width} height={logo.height} />}

            {images?.map((i, index) => <Image key={i.url} className={s.allphotos} src={url(i)} alt={i.alt} width={i.width} height={i.height} priority={index < 3} />)}
        </LightGallery>
    </>
}

export const getStaticPaths = async () => {
    const projects = await getProjects()

    return {
        paths: projects.map(p => ({
            params: {
                project: p.slug
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params }) => {
    const { project } = params
    const result = await getProject(project)

    if (!result)
        return {
            notFound: true
        }

    return {
        props: {
            project: result
        }
    }
}