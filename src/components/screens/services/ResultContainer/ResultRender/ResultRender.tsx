import { FC } from "react"
import ResultItem from "../ResultItem/ResultItem"
import styles from './ResultRender.module.scss'

interface item {
    title: string,
    subtitle: string,
    cost: number,
    variants: Array<string>
}

interface props {
    data: Array<item>
}

const ResultRender: FC<props> = (props) => {
    const {data} = props

    return(
        <div className={styles.container}>
            {
                data.map(item => {
                    return(
                        <ResultItem
                            cost={item.cost}
                            subtitle={item.subtitle}
                            title={item.title}
                            variants={item.variants}
                        />
                    )
                })
            }
        </div>
    )
}

export default ResultRender