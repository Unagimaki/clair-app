import { FC } from 'react'
import styles from './SalonItem.module.scss'

interface props {
    adress: string,
    image: string
}

const SalonItem: FC<props> = (props) => {

const {adress, image} = props

    return(
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image} alt="salon"/>
            </div>
            <div className={styles.info}>
                <div className={styles.adress}>{adress}</div>
                <button className={styles.map_button}>
                    <div>Карта</div>
                </button>
            </div>
        </div>
    )
}

export default SalonItem