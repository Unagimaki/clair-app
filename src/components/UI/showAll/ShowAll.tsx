import { FC } from 'react'
import styles from './ShowAll.module.scss'
import Link from 'next/link'
interface props {
    title: string
    link?: string
}

const ShowAll: FC<props> = ({title, link = ''}) => { 
    return(
        <Link href={link}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.title}>{title}</div>
                    <button className={styles.button}/>
                </div>
            </div>
        </Link>
    )
}

export default ShowAll