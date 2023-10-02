export interface IProduct {
    id: number
    title: string
    description: string
    category: string
    price: number
    rating: {
        rate: number
        count: number
    } 
}

export interface ICard {
    id: number
    title: string
    desc: string
}