import { ReactComponent as Logo } from 'assets/illustrations/logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'
import { cx, merge } from 'utils/styles'

interface TopbarProps extends ComponentProps<'header'> {}

export function Topbar(props: TopbarProps) {
    const { className, ...rest } = props

    const pathname = usePathname()

    return (
        <header className={merge('flex flex-col md:flex-row justify-between items-center gap-6', className)} {...rest}>
            <Link href='/'>
                <Logo />
            </Link>
            <nav className='flex gap-7 font-semibold'>
                <Item selected={pathname.startsWith('/portfolio')} href='/portfolio'>
                    Work
                </Item>
                <Item selected={pathname === '/contact'} href='/contact-more'>
                    Contact
                </Item>
            </nav>
        </header>
    )
}

interface ItemProps extends ComponentProps<typeof Link> {
    selected?: boolean
}

function Item(props: ItemProps) {
    const { selected, ...rest } = props

    return <Link className={cx('transition-colors', selected ? 'text-gray-500' : 'text-gray-400')} {...rest} />
}
