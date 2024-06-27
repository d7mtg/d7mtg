import { ReactComponent as Logo } from 'assets/illustrations/logo.svg'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { cx, merge } from 'utils/styles'

interface TopbarProps extends ComponentProps<'header'> {}

export function Topbar(props: TopbarProps) {
    const { className, ...rest } = props
    return (
        <header className={merge('flex flex-col md:flex-row justify-between items-center gap-10', className)} {...rest}>
            <Logo />
            <nav className='flex gap-7 text-gray-500 font-semibold'>
                <Item href='/portfolio'>Work</Item>
                <Item href='/contact-more'>Contact</Item>
            </nav>
        </header>
    )
}

interface ItemProps extends ComponentProps<typeof Link> {
    selected?: boolean
}

function Item(props: ItemProps) {
    const { selected, ...rest } = props

    return (
        <Link
            className={cx(
                'transition-colors relative',
                'after:bg-gray-500 after:content-[""] after:absolute after:bottom-0 after:left-0',
                'after:w-full after:h-[0.1em] after:scale-x-0  after:origin-right after:transition',
                'hover:after:scale-x-100 hover:after:origin-left'
            )}
            {...rest}
        />
    )
}
