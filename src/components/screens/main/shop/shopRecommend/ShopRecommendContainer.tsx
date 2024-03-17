import { IShopItem } from "@/types/shop.interface"
import ShopRecommendedRender from "./shopRecommendedRender/ShopRecommendedRender"
import { FC } from "react"

interface props { data: Array<IShopItem> }

const ShopRecommendedContainer: FC<props> = ({data}) => {
    return(
        <div>
            <ShopRecommendedRender data={data}/>
        </div>
    )
}

export default ShopRecommendedContainer