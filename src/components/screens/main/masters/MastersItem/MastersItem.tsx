import { FC } from 'react'
import styles from './MastersItem.module.scss'
import { IMasterItem } from '@/types/master.interface'

const MastersItem: FC<IMasterItem> = (props) => {
    
    const {name, profession, favorite, image, hasDateButton} = props

    return(
        <div className={styles.container}>
            <img
                className={styles.favourite_icon}
                src={`./images/masters/${favorite ? 'favourite-fill' : 'favourite'}.png`}
                alt="favourite_icon"
            />
            <div className={styles.photo}>
                <img src={image} alt="photo"/>
            </div>

            <div className={styles.info}>
                <div className={styles.inner}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.profession}>{profession}</div>
                </div>
                <button className={styles.button} style={{display: `${hasDateButton ? 'flex' : 'none'}`}}>
                    <div>
                        Запись
                    </div>
                </button>
            </div>
            
        </div>
    )
}

export default MastersItem