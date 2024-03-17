import { shopData } from "@/data/shop"
import ShopRender from "./shopRender/ShopRender"




const ShopContainer = () => {
    return(
        <div style={{marginBottom: '1.71vw'}}>
            <ShopRender data={shopData}/>
        </div>
    )
}

export default ShopContainer