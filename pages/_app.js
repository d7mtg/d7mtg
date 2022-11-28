import { Inter } from '@next/font/google'
import { initialize } from 'config/firebase.config'
import Head from 'next/head'
import Script from 'next/script'
import 'styles/globals.scss'
import 'styles/mystyle.css'

const inter = Inter({
    subsets: ['latin'],
    fallback: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ]
})

initialize()


function MyApp({ Component, pageProps }) {
    return <main className={inter.className}>
        <Head>
            <link rel="apple-touch-icon" type="image/png" href="/photos/appleicon.ico" />
            <link rel="apple-touch-icon" type="image/png" href="/photos/appleicon.png" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <link href="/favicon.png" rel="shortcut icon" type="image/png" />
            <link rel="manifest" href="/manifest.json" />
            <meta content="width=device-width,initial-scale=1,user-scalable=yes" name="viewport" />
            <meta name="language" content="English" />
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="1 days" />
            <title>D7mtg Branding Agency</title>
            <meta name="title" content="D7mtg Branding Agency" />
            <meta property="og:title" content="D7mtg Branding Agency" />
            <meta name="description"
                content="Your branding project starts here. We apply research and creativity to help you grow your brand and tell the world your story." />
            <meta property="og:description"
                content="Your branding project starts here. We apply research and creativity to help you grow your brand and tell the world your story." />
            <meta name="author" content="D7mtg" />
            <meta name="copyright" content="D7mtg" />
            <meta name="msapplication-TileColor" content="#ffd708" />
            <meta property="og:image" content="/ogpreview.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@d7mtg" />
            <meta name="twitter:title" content="D7mtg Branding Agency" />
            <meta name="twitter:description"
                content="D7mtg is a branding agency in Brooklyn that thrives on helping brands achieve clarity." />
            <meta name="twitter:image" content="/photos/twittercard.png" />
            <meta name="yandex-verification" content="6377e7342037f015" />
        </Head>
        {/* FIXME: in order to avoid hydration errors I have to use afterInteractive
            strategy, but it results in a short time of no icons */}
        <Script src="https://kit.fontawesome.com/7b42fedff3.js" />
        <Analytics google='G-2D8Q5R25WZ' clarity='9yg6bsle5u' />

        <Component {...pageProps} />
    </main>
}

export default MyApp


const Analytics = ({ google, clarity }) => {
    return <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${google}`} />
        <Script id="google-analytics">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${google}');
            `}
        </Script>

        <Script id='clarity-analytics'>
            {`
                (function (c, l, a, r, i, t, y) {
                    c[a] = c[a] || function () {
                        (c[a].q = c[a].q || []).push(arguments)
                    };
                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
                })(window, document, "clarity", "script", "${clarity}");
            `}
        </Script>
    </>
}