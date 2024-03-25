import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import s from './Footer.module.scss'


export const Footer = () => {
    return <footer className={s.links} itemScope itemType="http://schema.org/LocalBusiness">
        <span itemProp="name">D7mtg</span> is a branding agency based in Brooklyn, N.Y.
        <br /><br />
        Reach us at <a href='mailto:hello@d7mtg.com'>hello@d7mtg.com</a> or by phone at <a itemProp="telephone"
            href='tel:+18456712116'>845-671-2116</a>. We're located at <a itemProp="address"
                href="https://maps.apple.com/?q=d7mtg">63
            Flushing Avenue</a> Building 27 in the Brooklyn Navy Yard.
        <div className={s.labelContainer}>
            <Link href="/">
                <FontAwesomeIcon icon={['fal', 'hand-wave']} />&nbsp;Home
            </Link>
            <Link href="/portfolio/">
                <FontAwesomeIcon icon={['fal', 'folder-open']} />&nbsp;Portfolio
            </Link>
            <a href="/contact/">
                <FontAwesomeIcon icon={['fal', 'envelope']} />&nbsp;Contact us
            </a>
          
            <a href="/aleph/V2/">
                <FontAwesomeIcon icon={['fal', 'paragraph-rtl']} />&nbsp;Aleph Project
            </a>
            <a href="/kosher/">
                <FontAwesomeIcon icon={['fal', 'file-certificate']} />&nbsp;Kosher Project
            </a>
        </div>
    </footer>

}
