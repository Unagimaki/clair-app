import { mastersData } from "@/data/masters"
import FaceMasterRender from "./faceMasterRender/FaceMasterRender"
import styles from './FaceMastersContainer.module.scss'


const FaceMastersContainer = () => {
    return(
        <div className={styles.container}>
            <FaceMasterRender data={mastersData}/>
        </div>
    )
}

export default FaceMastersContainer