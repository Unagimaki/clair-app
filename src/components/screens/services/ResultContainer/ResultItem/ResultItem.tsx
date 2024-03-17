import { FC } from "react"
import styles from './ResultItem.module.scss'
interface props {
    title: string,
    subtitle: string,
    cost: number,
    variants: Array<string>,
}

const ResultItem: FC<props> = (props) => {
    const {title, subtitle, cost, variants} = props

    return(
        <div className={styles.container}>

            <div className={styles.left}>
                <div className={styles.title_container}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                </div>
                <div className={styles.variants}>
                {
                    variants.map(item => {
                        return(
                            <div className={styles.var_item}>{item}</div>
                        )
                    })
                }
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.cost}>от {cost} &#x20bd;</div>
                <button className={styles.button}>Записаться</button>
            </div>

        </div>
    )
}

export default ResultItem