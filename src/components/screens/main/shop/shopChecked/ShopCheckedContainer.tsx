import { IShopItem } from "@/types/shop.interface"
import ShopCheckedRender from "./shopCheckedRender/ShopCheckedRender"
import { FC } from "react"

interface props { data: Array<IShopItem> }

const ShopCheckedContainer: FC<props> = ({data}) => {
    return(
        <div>
            <ShopCheckedRender data={data.filter(item => item.isChecked)}/>
        </div>
    )
}

export default ShopCheckedContainer