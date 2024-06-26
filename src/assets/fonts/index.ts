import localFont from 'next/font/local'

const inter = localFont({
    src: [
        {
            path: './inter/InterVariable.woff2'
        },
        {
            path: './inter/InterVariable-Italic.woff2',
            style: 'italic'
        }
    ],
    display: 'swap',
    variable: '--font-inter'
})

export default inter.variable
