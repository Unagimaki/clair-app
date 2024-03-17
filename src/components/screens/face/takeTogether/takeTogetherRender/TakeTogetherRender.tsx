import { FC } from 'react'
import styles from './TakeTogetherRender.module.scss'
import TakeTogetherItem from '../TakeTogetherItem/TakeTogetherItem'

interface item {
    title: string,
    description: string,
    cost: number
    variants: Array<string>
}

interface props {
    data: Array<item>
}

const TakeTogetherRender: FC<props> = (props) => {

    const {data} = props

    return(
        <div className={styles.container}>
            <div className={styles.line}>
                {
                    data.map((item, index) => {
                        return(
                            <TakeTogetherItem
                                title={item.title}
                                description={item.description}
                                variants={item.variants}
                                cost={item.cost}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TakeTogetherRender