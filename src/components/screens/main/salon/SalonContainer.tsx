import { salonData } from '@/data/salon'
import styles from './SalonContainer.module.scss'
import SalonItem from './salonItem/SalonItem'

const SalonContainer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.line}>
                {
                    salonData.map((item, index) => {
                        return(
                            <SalonItem
                                key={index}
                                adress={item.adress}
                                image={item.image}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SalonContainer