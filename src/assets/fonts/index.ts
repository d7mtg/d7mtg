import localFont from 'next/font/local'

const inter = localFont({
    src: [
        {
            path: './inter/InterDisplay-Thin.woff2',
            weight: '100',
            style: 'normal'
        },
        {
            path: './inter/InterDisplay-ThinItalic.woff2',
            weight: '100',
            style: 'italic'
        },
        {
            path: './inter/InterDisplay-ExtraLight.woff2',
            weight: '200',
            style: 'normal'
        },
        {
            path: './inter/InterDisplay-ExtraLight.woff2',
            weight: '200',
            style: 'italic'
        },
        {
            path: './inter/InterDisplay-Light.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: './inter/InterDisplay-LightItalic.woff2',
            weight: '300',
            style: 'italic'
        },
        {
            path: './inter/InterDisplay-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './inter/InterDisplay-Italic.woff2',
            weight: '400',
            style: 'italic'
        },
        {
            path: './inter/InterDisplay-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './inter/InterDisplay-MediumItalic.woff2',
            weight: '500',
            style: 'italic'
        },
        {
            path: './inter/InterDisplay-SemiBold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: './inter/InterDisplay-SemiBoldItalic.woff2',
            weight: '600',
            style: 'italic'
        },
        {
            path: './inter/InterDisplay-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: './inter/InterDisplay-BoldItalic.woff2',
            weight: '700',
            style: 'italic'
        },
        {
            path: './inter/InterDisplay-ExtraBold.woff2',
            weight: '800',
            style: 'normal'
        },
        {
            path: './inter/InterDisplay-ExtraBoldItalic.woff2',
            weight: '800',
            style: 'italic'
        },
        {
            path: './inter/InterDisplay-Black.woff2',
            weight: '900',
            style: 'normal'
        },
        {
            path: './inter/InterDisplay-BlackItalic.woff2',
            weight: '900',
            style: 'italic'
        }
    ],
    display: 'swap',
    variable: '--font-inter'
})

export default inter.variable
