'use client'

import { LayoutGroup, motion } from 'framer-motion'
import { ComponentProps, useId } from 'react'
import { cx } from 'utils/styles'
import s from './index.module.css'

export function SegmentedControl(props: ComponentProps<typeof motion.div>) {
    const { className, ...rest } = props
    const id = useId()

    return (
        <LayoutGroup id={'button-group-' + id}>
            <motion.div layout layoutRoot className={cx(s['segmented-control'], className)} {...rest} />
        </LayoutGroup>
    )
}

interface SegmentedButtonProps extends ComponentProps<'button'> {
    selected?: boolean
}

export function SegmentedButton(props: SegmentedButtonProps) {
    const { className, selected, children, ...rest } = props

    return (
        <div className='stack flex-1'>
            {selected && <motion.div layout layoutId='button-group-selected' className={s.tab} />}
            <button className={cx(s['segmented-button'], selected && s.selected, className)} {...rest}>
                {children}
            </button>
        </div>
    )
}
