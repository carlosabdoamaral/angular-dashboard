export interface NotificationModel {
    title: string
    content: string
    notifiedAt: Date
}

export interface AccountModel {
    name: string
    email: string
    password: string
    notifications: NotificationModel[]
    amount: number // soma dos valores do portfolio
    portfolio: StockModel[]
    watchlist: StockModel[]
}

export interface StockModel {
    tag: string
    enterpriseName: string
    shareAmount: number
    price: number
    change: number
    currentAmount: number
}

