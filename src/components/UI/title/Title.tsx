import { FC } from 'react'
import styles from './Title.module.scss'

interface TitleProps {
    title: string;
  }

const Title: FC<TitleProps> = ({title}) => {
    return(
        <div className={styles.title_container}>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}

export default Title