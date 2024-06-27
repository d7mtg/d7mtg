export default async function handler(req, res) {
    if (req.method !== 'POST')
        return res.status(405).send()

    const {
        name, email, service, more
    } = req.body

    await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            access_key: process.env.WEB3_ACCESS_KEY,
            subject: `New contact email from: ${name}`,
            email,
            name,
            service,
            message: more,
        })
    })


    res.status(200).json({ value: 'success' })

}
