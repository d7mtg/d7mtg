import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Footer, Logo } from 'components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { getProjects, url } from 'utils/backend'
import hp from './HomeProject.module.scss'
import s from './index.module.scss'

export default function Home({ projects }) {
    return <>
        <Banner />
        <div className={s.projectsContainer}>
            {projects.map(p => <HomeProject key={p.slug} {...p} />)}
        </div>

        <div className={s.moreProjects}>
            <Link className={s.button} href='/portfolio'>
                <FontAwesomeIcon icon={['fas', 'rectangle-vertical-history']} />
                &nbsp;&nbsp;More projects
            </Link>
        </div>

        <Footer className={s.footer} />
    </>
}


const Banner = () => {
    return <div className={s.banner}>
        <div className={s.topbar}>
            <Logo className={s.logo} black />
            <div className={s.menu}>
                <Link href="/portfolio" className={s.item}>Work</Link>
                <Link href="/contact" className={s.item}>Contact</Link>
            </div>
        </div>

        <p className={s.header}>
            We design software that is a joy to use <span className={s.bounceDot}>.</span> 

            <br /><br />
            <span className={s.subheader}>D7mtg is a UX and web agency in Brooklyn.</span>
        </p>
        <div className={s.scrollDown}>
            <FontAwesomeIcon icon={['fas', 'arrow-down']} />
            <p>Keep scrolling</p>
        </div>
    </div>
}



export const HomeProject = props => {
    const {
        theme,
        logo,
        banner,
        bannerMobile,
        name,
        subtitle,
        homeDescription,
        labels,
        slug
    } = props

    // use IntersectionObserver to change theme while scrolling
    const [intersecting, setIntersecting] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const options = {
            rootMargin: '0px 0px -100% 0px',
            threshold: 0
        }

        const observer = new IntersectionObserver(e => {
            setIntersecting(e[0].isIntersecting)
        }, options)

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])


    let css =
        `#banner-${slug} {
            background-image: linear-gradient(161deg, ${theme}, #00000000), url(${url(banner)});
            background-color: ${theme};
        }`

    if (bannerMobile) {
        css +=
            `
            @media (max-width: 900px) {
                #banner-${slug} {
                    background-image: linear-gradient(161deg, ${theme}, #00000000), url(${url(bannerMobile)});
                } 
            }`
    }

    return <>
        <Head>
            {intersecting && <meta name="theme-color" content={theme} />}
            <link href={url(banner)} rel='preload' as='image' media={bannerMobile ? '(min-width: 900.1px)' : undefined} />
            {bannerMobile && <link href={url(bannerMobile)} rel='preload' as='image' media='(max-width: 900px)' />}
            <style>{css}</style>
        </Head>
        <div ref={ref} className={hp.project} id={'banner-' + slug}>
            <div className={hp.heading}>
                <h3>{name}</h3>
                {logo && <Image className={hp.logo} src={url(logo)} width={logo.width} height={logo.height} alt={logo.alt} />}
            </div>
            <h4>{subtitle}</h4>
            <div className={hp.labelContainer}>
                {labels?.map(({ text, icon, variant }) => <label key={text}>
                    <FontAwesomeIcon icon={[variant, icon]} />&nbsp;{text}
                </label>)}
            </div>
            <ReactMarkdown>{homeDescription}</ReactMarkdown>
            <Link className={hp.link} href={'/portfolio/projects/' + slug}>
                View project <FontAwesomeIcon icon={['fal', 'arrow-right']} />
            </Link>
        </div>
    </>
}



export const getStaticProps = async () => {
    let projects = await getProjects()
    projects = projects.filter(p => p.homeVisible)
    projects.sort((a, b) => a.homeIndex - b.homeIndex)

    return {
        props: {
            projects
        }
    }
}
