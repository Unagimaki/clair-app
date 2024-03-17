import { FC, useEffect, useState } from "react"
import { storiesData } from "@/data/stories"
import StoriesRender from "./storiesRender/StoriesRender"
import { IStoriesItem } from "@/types/stories.interface"

interface props {
    data: Array<IStoriesItem>
    storiesHandler: () => void
    storiesSelect: (index: number) => void
}

const StoriesContainer: FC<props> = ({data, storiesHandler, storiesSelect}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [windowWidth, setWindowWindth] = useState(false)

    const incrementIndex = () => {
        windowWidth && currentIndex < storiesData.length-1 && setCurrentIndex(prev => prev + 1)
    }
    const decrementIndex = () => {
        windowWidth && currentIndex > 0 && setCurrentIndex(prev => prev - 1)
    }
    



    useEffect(() => {
        window.innerWidth <= 374 ? setWindowWindth(true) : setWindowWindth(false)
        window.addEventListener('resize', () => {
            window.innerWidth <= 374 ? setWindowWindth(true) : setWindowWindth(false)
        })
    }, []);
    return(
        <div>
            <StoriesRender
                currentIndex={currentIndex}
                data={data}
                incrementIndex={incrementIndex}
                decrementIndex={decrementIndex}
                setCurrentIndex={setCurrentIndex}
                windowWidth={windowWidth}
                storiesHandler={storiesHandler}
                storiesSelect={storiesSelect}
            />
        </div>
    )
}

export default StoriesContainer