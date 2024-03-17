import { FC } from 'react'
import styles from './TakeTogetherItem.module.scss'

interface props {
    title: string,
    description: string,
    cost: number
    variants: Array<string>
}

const TakeTogetherItem: FC<props> = (props) => {

    const {title, description, variants, cost} = props

    return(
        <div className={styles.container}>
            <div className={styles.inner}>

                <div className={styles.left}>
                    <div className={styles.title_container}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.description}>{description}</div>
                    </div>
                    <div className={styles.variants_container}>
                        {
                            variants.map(item => {
                                return(
                                    <div className={styles.variant_item}>{item}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.cost}>От {cost} &#x20bd;</div>
                    <button className={styles.button}>
                        Записаться
                    </button>
                </div>

            </div>
        </div>
    )
}
export default TakeTogetherItem