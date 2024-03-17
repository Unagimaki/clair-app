import { newsData } from "@/data/news"
import NewsRender from "./newsRender/NewsRender"

const NewsContainer = () => {
    return(
        <div>
            <NewsRender data={newsData}/>
        </div>
    )
}

export default NewsContainer