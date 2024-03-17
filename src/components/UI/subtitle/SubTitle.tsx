import { FC } from 'react'
import styles from './SubTitle.module.scss'

interface TitleProps {
    title: string;
  }

const SubTitle: FC<TitleProps> = ({title}) => {
    return(
        <div className={styles.title_container}>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}

export default SubTitle