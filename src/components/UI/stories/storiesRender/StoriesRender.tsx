import { FC, useState } from 'react'
import styles from './StoriesRender.module.scss'
import StoriesItem from '../storiesItem/StoriesItem'
import { IStoriesItem } from '@/types/stories.interface'

interface props {
    windowWidth: boolean,
    currentIndex: number,
    data: Array<IStoriesItem>,
    incrementIndex: () => void
    decrementIndex: () => void
    setCurrentIndex: (index: number) => void
    storiesHandler: () => void
    storiesSelect: (index: number) => void
}

const StoriesRender: FC<props> = (props) => {
    const [startX, setStartX] = useState(0)
    const [endX, setEndX] = useState(0)

    const {
        currentIndex,
        data,
        windowWidth,
        incrementIndex,
        decrementIndex,
        setCurrentIndex,
        storiesHandler,
        storiesSelect
    } = props

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => { setStartX(e.touches[0].clientX) }
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => { setEndX(e.touches[0].clientX) }
    const calcSwipe = () => startX > endX ? incrementIndex() : decrementIndex();

    return(
        <div className={styles.container}>
            <div
                className={styles.line}
                style={{ transform: `translate(${windowWidth && -currentIndex * 94.92}vw)` }}
                onTouchStart={e => handleTouchStart(e)}
                onTouchEnd={calcSwipe}
                onTouchMove={e => handleTouchMove(e)}
            >
                {
                    data.map((item, index) => { return <StoriesItem
                        background={item.background}
                        title={'Тренды лета'} key={item.id}
                        storiesHandler={storiesHandler}
                        storiesSelect={storiesSelect}
                        index={index}
                        /> })
                }
            </div>

            <div className={styles.slider_dotts}>
                <div className={styles.dotts_container}>
                    {
                        data.map((item, index) => {
                            return(
                                    <div
                                        key={index}
                                        className={styles.dott}
                                        onClick={() => setCurrentIndex(index)}
                                        style={{
                                                backgroundColor: `${index == currentIndex ? '#000' : '#fff'}`,
                                                width: `${index !== currentIndex ? 5 : 8}px`,
                                                height: `${index !== currentIndex ? 5 : 8}px`,
                                            }}
                                    />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default StoriesRender