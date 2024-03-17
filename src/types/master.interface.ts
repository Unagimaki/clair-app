import { IProcedure } from "./procedure.interface"

export interface IMasterItem {
    name: string,
    surname?: string
    profession: string
    favorite: boolean,
    image: string,
    hasDateButton?: boolean
    adress?: string
    description?: string
    procedures?: Array<IProcedure>
    qualification?: Array<{text: string}> 
}