import cx from 'clsx'
export { cx }
import { twMerge } from 'tailwind-merge'

export function merge(...inputs: Parameters<typeof cx>) {
    return twMerge(cx(inputs))
}
