import ResultRender from "./ResultRender/ResultRender"
import styles from './ResultContainer.module.scss'
import { mastersData } from "@/data/masters"

const ResultContainer = () => {
    return(
        <div className={styles.container}>
            <ResultRender data={mastersData}/>
        </div>
    )
}

export default ResultContainer