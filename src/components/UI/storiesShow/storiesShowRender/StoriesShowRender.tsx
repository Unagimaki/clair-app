import { IStoriesItem } from '@/types/stories.interface'
import styles from './StoriesShowRender.module.scss'
import { FC, useEffect, useState } from 'react'
import StoriesShowItem from '../storiesShowItem/StoriesShowItem'

interface props {
    data: Array<IStoriesItem>
    storiesHandler: () => void
    incrementIndex: () => void
    decrementIndex: () => void
    stopInterval: (data: string) => void
    isRun: boolean
    currentIndex: number
}


const StoriesShowRender: FC<props> = (props) => {
    const {data, currentIndex, decrementIndex, incrementIndex, storiesHandler, stopInterval, isRun} = props
    const [windowWidth, setWindowWindth] = useState(false)
    const [startX, setStartX] = useState(0)
    const [endX, setEndX] = useState(0)

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => { setStartX(e.touches[0].clientX) }
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => { setEndX(e.touches[0].clientX) }
    const calcSwipe = () => { startX > endX ? incrementIndex() : decrementIndex() }


    useEffect(() => {
        window.innerWidth <= 374 ? setWindowWindth(true) : setWindowWindth(false)
        window.addEventListener('resize', () => {
            window.innerWidth <= 374 ? setWindowWindth(true) : setWindowWindth(false)
        })
    }, []);
    
    const calcTranslate = () => windowWidth ? (-currentIndex * 100) : (-currentIndex * 20.89 + 36.64)

    return(
        <div className={styles.container}>
            <div
                className={styles.inner}
                style={{transform: `translate(${calcTranslate()}vw)`}}

            >
                {data.map((item, index) => {
                    return(
                        <StoriesShowItem
                            key={item.id}
                            title={item.title}
                            duration={item.duration}
                            background={item.background}
                            storiesHandler={storiesHandler}
                            currentIndex={currentIndex}
                            index={index}
                            incrementIndex={incrementIndex}
                            decrementIndex={decrementIndex}
                            stopInterval={stopInterval}
                            isRun={isRun}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default StoriesShowRender