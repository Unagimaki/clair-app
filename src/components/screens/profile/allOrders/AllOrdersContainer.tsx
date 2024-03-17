import { IOrder } from "@/types/order.interface"
import { FC } from "react"
import AllOrdersRender from "./allOrdersRender/AllOrdersRender"

interface props { data: Array<IOrder> }

const AllOrdersContainer: FC<props> = ({data}) => {
    return(
        <div>
            <AllOrdersRender data={data}/>
        </div>
    )
}

export default AllOrdersContainer