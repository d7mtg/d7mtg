import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import fonts from 'assets/fonts'
import { LayoutProps } from 'types/layout'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import Script from 'next/script'
import { initialize } from 'config/firebase.config'

import './index.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'lightgallery/css/lightgallery.css'
import 'styles/globals.scss'

const { library, config } = require('@fortawesome/fontawesome-svg-core')
config.autoAddCss = false
library.add(fab, fal, fas, far)

initialize()

export default function RootLayout({ children }: LayoutProps) {
    // Chrome extensions mess with classnames and attributes, disable warnings
    return (
        <html className={fonts} lang='en' translate='no' suppressHydrationWarning>
            <body suppressHydrationWarning>
                {children}
                <Script src='https://assets.usestyle.ai/seonajsplugin' defer id='seona-js-plugin' />
                <Analytics google='G-2D8Q5R25WZ' clarity='9yg6bsle5u' />
                <JsonLD />
            </body>
        </html>
    )
}

interface AnalyticsProps {
    google: string
    clarity: string
}

function Analytics({ google, clarity }: AnalyticsProps) {
    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${google}`} />
            <Script id='google-analytics'>
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
            <VercelAnalytics />
        </>
    )
}

const JsonLD = () => (
    <Script type='application/ld+json' strategy='beforeInteractive' id='json-ld'>
        {`{
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "D7mtg",
            "image": "https://d7m.tg/ogpreview.png",
            "telephone": "845-671-2116",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "63 Flushing Avenue Building 27",
                "addressLocality": "Brooklyn NY 11205",
                "addressCountry": "USA"
            }
        }`}
    </Script>
)

/* 


const Meta = () => {
    return <Head>
        <meta content="width=device-width,initial-scale=1,user-scalable=yes" name="viewport" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#333" />
        <meta name="theme-color" content="#ffd708" />
        <meta name="msapplication-TileColor" content="#ffd708" />
        <link rel="apple-touch-icon" type="image/png" href="/photos/appleicon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="/photos/appleicon.png" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link href="/favicon.png" rel="shortcut icon" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <title>D7mtg | UX and Web Design Agency in Brooklyn, NY</title>
        <meta name="title" content="D7mtg | UX and Web Design Agency in Brooklyn, NY" />
        <meta key="ogtitle" property="og:title" content="D7mtg | UX and Web Design Agency in Brooklyn, NY" />
        <meta key='description' name="description"
            content="We design software that is a joy to use." />
        <meta key="ogdescription" property="og:description"
            content="We design software that is a joy to use." />
        <meta property="og:logo" content="/d7mtg_logo.png" />
        <meta name="author" content="D7mtg" />
        <meta name="copyright" content="D7mtg" />
        <meta key="ogimage" property="og:image" content="/ogpreview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@d7mtg" />
        <meta key='twittertitle' name="twitter:title" content="D7mtg | UX and Web Design Agency in Brooklyn, NY" />
        <meta key='twitterdescription' name="twitter:description"
            content="We design software that is a joy to use" />
        <meta key='twitterimage' name="twitter:image" content="/photos/twittercard.png" />
        <meta name="yandex-verification" content="6377e7342037f015" />
    </Head>
}

*/