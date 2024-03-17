import { FC } from 'react'
import styles from './FaceCareInfo.module.scss'

interface props {
    text: string
    isVisible: boolean
}

const FaceCareInfo: FC<props> = ({text, isVisible}) => {
    return(
        <div className={isVisible ? styles.container : ''}>
            <div className={styles.inner}>
                {text}
            </div>
        </div>
    )
}


export default FaceCareInfo