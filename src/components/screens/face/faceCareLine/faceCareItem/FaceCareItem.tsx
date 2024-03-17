import { FC } from 'react'
import styles from './FaceCareItem.module.scss'

interface props {
    title: string,
    image: string
}

const FaceCareItem: FC<props> = (props) => {
    const {title, image} = props

    return (
        <div
            className={styles.container}
            style={{
                background: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className={styles.inner}>
                <div className={styles.title_container}>
                    <div className={styles.title}>{title}</div>
                </div>
            </div>
        </div>
    )
}

export default FaceCareItem