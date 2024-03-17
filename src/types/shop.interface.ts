export interface IShopItem {
    title: string
    brand: string
    image: string
    composition?: string
    usage?: string
    category?: string
    description?: string
    id?: number
    cost: number
    promo: boolean
    favourite: boolean
    addedToCart?: boolean
    isChecked?: boolean
}