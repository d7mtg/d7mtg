import { Fraunces } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { getProjects } from 'utils/backend'
import s from './404.module.scss'

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: '500',
    display: 'swap'
})

export default function NotFound({ links }) {
    const [typewriter, setTypewriter] = useState('\u00a0')
    const randomLink = useRef(links[Math.floor(Math.random() * links.length)])


    useEffect(() => {
        const delay = setTimeout(() => {
            let i = 0
            const text = '404'

            const timer = setInterval(() => {
                if (i < text.length) {
                    setTypewriter(text.substring(0, i + 1))
                    i++
                }
                else
                    clearInterval(timer)
            }, 200)
        }, 1000)

        return () => clearTimeout(delay)
    }, [])

    return <div className={s.root}>
        <Head>
            <title>404 Not Found</title>
        </Head>

        <div className={s.line} />

        <h2>{typewriter}</h2>
        <h1 className={fraunces.className}>Four, oh four.</h1>
        <p className={s.footer}>
            What are you looking for?
            <br /><br />
            Home page? <Link href='/'>Sure thing.</Link><br />
            {randomLink.current && <> Random project from our portfolio? <Link href={randomLink.current}>Go right ahead</Link><br /></>}
            A way to contact us? <a href='/contact?ref=fourohfour'>Look no further.</a>
        </p>
    </div>
}

export const getStaticProps = async () => {
    const projects = await getProjects()
    const links = projects.map(p => '/portfolio/projects/' + p.slug)

    return {
        props: {
            links
        }
    }
}
