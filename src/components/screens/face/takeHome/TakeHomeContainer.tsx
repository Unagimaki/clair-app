import { shopData } from "@/data/shop"
import TakeHomeRender from "./takeHomeRender/TakeHomeRender"

const TakeHomeContainer = () => {
    return(
        <div>
            <TakeHomeRender data={shopData}/>
        </div>
    )
}

export default TakeHomeContainer