import { SegmentedButton, SegmentedControl, Topbar } from 'components'
import grid from 'assets/illustrations/grid.svg'
import { ReactComponent as User } from 'assets/icons/user.svg'
import { ReactComponent as Email } from 'assets/icons/email.svg'
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg'
import { ReactComponent as Received } from 'assets/illustrations/received.svg'
import { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'
import { cx } from 'utils/styles'

type Status = 'ready' | 'submitting' | 'complete'
type Service = 'saas' | 'mobile' | 'website' | 'other'

interface FormData {
    name: string
    email: string
    service: Service
    more: string
}

interface FormProps {
    onSubmit: (data: FormData) => void
    pending: boolean
}

export default function ContactPage() {
    const [status, setStatus] = useState<Status>('ready')

    const handleContact = async (data: FormData) => {
        const { name, email, service, more } = data

        setStatus('submitting')

        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                service,
                more
            })
        })

        setStatus('complete')
    }

    return (
        <section
            style={{ backgroundImage: `url(${grid})` }}
            className=' flex flex-col bg-gray-100 min-h-full max-h-full overflow-auto [scrollbar-gutter:stable]
            bg-top bg-[length:200%] md:bg-[length:auto] bg-no-repeat'>
            <Topbar />

            <div className='flex flex-col items-center flex-1 gap-10 pb-10'>
                {status !== 'complete' && (
                    <>
                        <div className='flex justify-center'>
                            <h2 className='p-5 md:p-10 text-4xl text-gray-500 text-center font-semibold text-pretty sm:whitespace-pre-line tracking-tight'>
                                Let's add some joy{'\n'} to your software
                            </h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Form onSubmit={handleContact} pending={status === 'submitting'} />
                        </div>
                    </>
                )}
                {status === 'complete' && (
                    <div className='flex flex-col items-center gap-12 my-auto'>
                        <Received />
                        <h1 className='px-10 text-4xl md:text-7xl tracking-tight font-semibold text-gray-500 text-center'>
                            Message received!
                        </h1>
                        <p className='md:w-1/3 px-10 text-center text-pretty font-medium text-sm'>
                            We will be in touch in less that one day. We're closed on the Shabbat and some holidays, so
                            during that time responses may take a bit longer.
                        </p>
                    </div>
                )}

                <Link
                    href='/contact-more'
                    className='flex items-center gap-2 mt-auto text-gray-700 text-xs font-medium pl-3 pr-4 py-1 rounded-full border border-gray-200'>
                    {/* <div className='size-1.5 bg-green-dark rounded-full animate-pulsing' /> */}8 more ways to
                    connect with D7mtg
                </Link>
            </div>
        </section>
    )
}

function validEmail(email: string) {
    return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) != null
}

function Form(props: FormProps) {
    const { onSubmit, pending } = props

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [service, setService] = useState<Service>('saas')
    const [more, setMore] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const valid = name.length > 0 && validEmail(email)

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        if (name) {
            setNameError(false)
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        if (validEmail(email)) {
            setEmailError(false)
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name) {
            setNameError(true)
        }
        if (!validEmail(email)) {
            setEmailError(true)
        }

        if (!valid) {
            return
        }

        onSubmit({
            name,
            email,
            service,
            more
        })
    }

    return (
        <form className='max-w-96 flex flex-col gap-4 px-3' onSubmit={handleSubmit}>
            <label className='text-label'>
                <span className='text-sm font-medium'>
                    Your name <span className='text-gray-400'>*</span>
                </span>
                <div className={cx('text-field', nameError && 'invalid')}>
                    <User />
                    <input placeholder='First and last name' value={name} onChange={handleNameChange} />
                </div>
            </label>
            <label className='text-label'>
                <span className='text-sm font-medium'>
                    Email address <span className='text-gray-400'>*</span>
                </span>
                <div className={cx('text-field', emailError && 'invalid')}>
                    <Email />
                    <input placeholder='example@company.com' value={email} onChange={handleEmailChange} />
                </div>
            </label>
            <label className='text-label'>
                <span className='text-sm font-medium'>Service</span>
                <SegmentedControl>
                    <SegmentedButton type='button' selected={service === 'saas'} onClick={e => setService('saas')}>
                        SaaS UX
                    </SegmentedButton>
                    <SegmentedButton type='button' selected={service === 'mobile'} onClick={e => setService('mobile')}>
                        Mobile app
                    </SegmentedButton>
                    <SegmentedButton
                        type='button'
                        selected={service === 'website'}
                        onClick={e => setService('website')}>
                        Website
                    </SegmentedButton>
                    <SegmentedButton type='button' selected={service === 'other'} onClick={e => setService('other')}>
                        Other
                    </SegmentedButton>
                </SegmentedControl>
            </label>
            <label className='text-label'>
                <span className='text-sm font-medium'>Can you tell us a little bit more?</span>
                <textarea
                    className='text-field'
                    rows={5}
                    placeholder='A bit more about your project'
                    value={more}
                    onChange={e => setMore(e.target.value)}
                />
            </label>
            <button className='button primary' disabled={pending}>
                <ArrowRight />
                Send
            </button>
        </form>
    )
}
