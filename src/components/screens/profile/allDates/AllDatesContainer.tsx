import { FC } from "react"
import AllDatesRender from "./allDatesRender/AllDatesRender"
import { IDateItem } from "@/types/date.interafce"

interface props { data: Array<IDateItem> }

const AllDatesContainer: FC<props> = ({data}) => {
    return(
        <div>
           <AllDatesRender data={data}/> 
        </div>
    )
}

export default AllDatesContainer