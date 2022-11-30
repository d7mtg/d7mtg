import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Logo } from 'components/Logo'
import s from './login.module.scss'
import cx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
    const auth = getAuth()

    const [signIn, user, loading, error] = useSignInWithEmailAndPassword(auth)

    useEffect(() => {
        if (user) {
            const route = router.query.return ?? '/admin'
            router.push(route)
        }
    }, [router, user])

    const handleLogin = async e => {
        e.preventDefault()
        signIn(email, password)
    }

    return <div className={s.root}>
        <Logo className={s.logo} black />
        <form onSubmit={handleLogin} className={s.form}>
            <input className={cx(error && s.error)} name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <input className={cx(error && s.error)} name='password' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit'>
                <FontAwesomeIcon icon={['fal', 'sign-in']} />
                &nbsp;&nbsp;Log In
            </button>
        </form>
    </div>
}