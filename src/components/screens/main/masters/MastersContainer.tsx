import { mastersData } from '@/data/masters'
import styles from './MastersContainer.module.scss'
import MastersItem from './MastersItem/MastersItem'

const MasterContainer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.line}>
                {
                    mastersData.map((item, index) => {
                        return(
                            <MastersItem
                                hasDateButton={true}
                                key={index}
                                favorite={item.favorite}
                                image={item.image}
                                name={item.name}
                                profession={item.profession}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MasterContainer