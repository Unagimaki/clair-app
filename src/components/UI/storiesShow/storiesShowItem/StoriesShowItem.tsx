import { IStoriesItem } from "@/types/stories.interface"
import styles from './StoriesShowItem.module.scss'
import { FC } from "react"

type props = IStoriesItem & {
    storiesHandler: () => void
    incrementIndex: () => void
    decrementIndex: () => void
    stopInterval: (data: string | any) => void
    isRun: boolean
    currentIndex: number
    index: number
}

const StoriesShowItem: FC<props> = (props) => {
    const { title, duration, storiesHandler, currentIndex, index, decrementIndex, incrementIndex, stopInterval, isRun } = props
    
    const changeIndex = () => index > currentIndex ? incrementIndex() : index < currentIndex ? decrementIndex() : ''
    const pause = () => isRun ? 'running' : 'paused'

    return(
        <div
            className={currentIndex == index ? styles.container_current : styles.container_hidden}
            onClick={(event) => {
                changeIndex()
                stopInterval(event.currentTarget.dataset.value)
            }}
            data-value={currentIndex == index ? 'current' : null}
        >
            <button onClick={() => storiesHandler()} className={currentIndex == index ? styles.close_button : styles.close_button_hidden}>
                <img src=".\images\stories\close.svg" alt="close"/>
            </button>
            <div className={styles.title}>{title}</div>
            <div className={currentIndex  == index ? styles.timer_line_container : styles.timer_hidden}>
                <div style={{animationDuration: `${duration}s`, animationPlayState: pause()}} className={styles.timer_line}></div>
            </div>
        </div>
    )
}

export default StoriesShowItem