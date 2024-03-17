import { FC } from "react"
import ProfileOrdersRender from "./profileOrdersRender/ProfileOrdersRender"
import { IOrder } from "@/types/order.interface"

interface props { data: Array<IOrder> }

const ProfileOrdersContainer: FC<props> = ({data}) => {
    return(
        <div>
            <ProfileOrdersRender data={data}/>
        </div>
    )
}
export default ProfileOrdersContainer