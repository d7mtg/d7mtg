import { protect } from 'util/protect'
import s from './admin.module.scss'
import { getProjects } from 'util/firebase'

function Admin({ projects }) {
    return <div className={s.root}>
        <div className={s.header}>
            <h1>Projects</h1>
            <h3>{projects.length} Projects</h3>
        </div>
    </div>
}

export default protect(Admin)

export const getStaticProps = async () => {
    return {
        props: {
            projects: await getProjects()
        }
    }
}