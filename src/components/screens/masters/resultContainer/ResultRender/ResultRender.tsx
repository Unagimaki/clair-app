import { FC } from 'react'
import styles from './ResultRender.module.scss'
import MastersItem from '@/components/screens/main/masters/MastersItem/MastersItem'
import { IMasterItem } from '@/types/master.interface'

interface props {
    data: Array<IMasterItem>
}

const ResultRender: FC<props> = ({data}) => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                {
                    data.map((item, index) => {
                        return(
                            <MastersItem
                                hasDateButton={true}
                                image={item.image}
                                name={item.name}
                                profession={item.profession}
                                key={index}
                                favorite={item.favorite}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ResultRender