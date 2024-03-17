import { FC } from 'react'
import styles from './FaceTitle.module.scss'

interface props {
    title: string
}

const FaceTitle: FC<props> = (props) => {

    const {title} = props

    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                {title}
            </div>
        </div>
    )
}

export default FaceTitle