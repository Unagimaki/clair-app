import { IShopItem } from "./shop.interface"

export interface IOrder {
    delivered: string
    lot: number
    products: Array<IShopItem>
    amountPrice: number
    id?: number    
}
