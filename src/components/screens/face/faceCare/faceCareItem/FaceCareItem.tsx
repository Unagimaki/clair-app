import React, { FC, useEffect, useState } from 'react'
import styles from './FaceCareItem.module.scss'
import FaceCareInfo from '../faceCareInfo/FaceCareInfo'
import { IProcedure } from '@/types/procedure.interface'

const FaceCareItem: FC<IProcedure> = (props) => {
    const [windowWidth, setWindowWidth] = useState(false)
    const {title, text, cost} = props
    const [isVisible, setIsVisible] = useState(false)

    const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsVisible(true)
    }
    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsVisible(false)
    }

    useEffect(() => {
        window.innerWidth <= 374 ? setWindowWidth(true) : setWindowWidth(false)
        window.addEventListener('resize', () => {
            window.innerWidth <= 374 ? setWindowWidth(true) : setWindowWidth(false)
        })
    }, [])

    return(
        <div className={styles.container}>
                {
                    !windowWidth && isVisible ? <div className={styles.hover}>{text}</div> :
                    isVisible && windowWidth && <FaceCareInfo isVisible={isVisible} text={text}/>
                }

            <div className={styles.left}>
                <div className={styles.select}>
                    <div className={styles.select_inner}/>
                </div>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.right}>
                <div className={styles.cost}>{cost} &#8381;</div>
                <div
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    className={styles.info}>
                    <div className={styles.info_icon}>i</div>
                </div>

            </div>
        </div>
    )
}

export default FaceCareItem