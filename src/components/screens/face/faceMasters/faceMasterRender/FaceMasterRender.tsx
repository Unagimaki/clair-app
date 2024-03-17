import { FC } from 'react'
import styles from './FaceMasterRender.module.scss'
import FaceMasterItem from '../faceMasterItem/FaceMasterItem'
import { IMasterItem } from '@/types/master.interface'

interface props {
    data: Array<IMasterItem>
}

const FaceMasterRender: FC<props> = (props) => {
    const {data} = props
    return(
        <div className={styles.container}>
            <div className={styles.line}>
                {
                    data.map((item, index) => {
                        return(
                            <FaceMasterItem
                                name={item.name}
                                profession={item.profession}
                                image={item.image}
                                adress={item.adress}
                                key={index}
                                favorite={item.favorite}
                                description={item.description}
                                surname={item.surname}
                                procedures={item.procedures}
                                qualification={item.qualification}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FaceMasterRender