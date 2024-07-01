import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Footer } from 'components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { getProjects, url } from 'utils/backend'
import hp from './HomeProject.module.scss'
import s from './index.module.scss'
import grid from 'assets/illustrations/grid.svg'
import { ReactComponent as Stars } from 'assets/illustrations/stars.svg'
import { Topbar } from 'components'

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
    return <section style={{
        backgroundImage: `url(${grid})`
    }} className='flex flex-col md:min-h-svh bg-gray-100
                    bg-[length:250%] md:bg-[length:auto] bg-center text-gray-500 text-center'>
        <Topbar />
        <div className='flex flex-col justify-between py-24 gap-20 flex-1 items-center'>

            <h1 className='text-5xl md:text-7xl font-semibold text-pretty sm:whitespace-pre-line tracking-tight'>
                We design{'\n'}
                software that is{'\n'}
                <span className='whitespace-nowrap'>
                    a <Stars className='inline h-[0.475em]' width={null} />
                    <span className='bg-clip-text text-transparent bg-[radial-gradient(circle_at_bottom_right,#f9944a,#f9d84a)]'>
                        joy
                    </span>
                </span>{' '}
                <span className='whitespace-nowrap'>
                    to <button className='select-none inline-flex bg-white 
                    ring-4 ring-gray-200 rounded-2xl md:rounded-3xl px-3 py-1 
                    duration-500 hover:duration-200
                    group/button transition shadow-lg hover:shadow-2xl
                    active:shadow-none active:bg-gray-100'>
                        <div className='-mt-2.5 md:-mt-3'>use</div>
                    </button>
                </span>

            </h1>

            <h3 className='text-lg md:text-xl'>D7mtg is a UX and web<br />agency in Brooklyn.</h3>

            <Link href='/contact' className='button primary'>Contact</Link>
        </div>
    </section>
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
                {logo && <Image className={hp.logo} src={url(logo)} width={logo.width} height={logo.height} alt={logo.alt} priority />}
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
