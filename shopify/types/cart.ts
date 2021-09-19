
export type LineItem = {
    id: string,
    title: string,
    quantity: number,
    variantId: string,
    price: any,
    image: any,
}

export type Cart = {
    id: string
    webUrl: string
    totalPrice?: number
    completed?: boolean
    lineItems?: LineItem[]
}
