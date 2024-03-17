import { FC, useEffect, useRef, useState } from "react"
import StoriesShowRender from "./storiesShowRender/StoriesShowRender"
import { IStoriesItem } from "@/types/stories.interface"

interface props {
    data: Array<IStoriesItem>
    storiesHandler: () => void
    current: number
}

const StoriesShowContainer: FC<props> = ({data, storiesHandler, current}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isRun, setIsRun] = useState(true)
    const timerRef = useRef(6);

    const incrementIndex = () => { currentIndex < data.length-1 ? setCurrentIndex(prev => prev + 1) : storiesHandler() }
    const decrementIndex = () => { currentIndex > 0 && setCurrentIndex(prev => prev - 1) }
    const stopInterval = (data: string) => data == 'current' && setIsRun(!isRun)

    useEffect(() => {
        const interval = setInterval(() => {
            if (timerRef.current === 0) {
                incrementIndex(), timerRef.current = 6
            } else if (isRun) {
                timerRef.current -= 1
            }
        }, 1000);

        return () => clearInterval(interval);

    }, [currentIndex, isRun]);

    useEffect(() => {
        timerRef.current = 6
        setIsRun(true)                           
    }, [currentIndex])

    useEffect(() => {
        setCurrentIndex(current)
    }, [])


    return(
        <div>
            <StoriesShowRender
                currentIndex={currentIndex}
                storiesHandler={storiesHandler}
                incrementIndex={incrementIndex}
                decrementIndex={decrementIndex}
                stopInterval={stopInterval}
                isRun={isRun}
                data={data}/>
        </div>
    )
}

export default StoriesShowContainer 