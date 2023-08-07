import { AccountModel, NotificationModel, StockModel } from "./models";

const notifications: NotificationModel[] = [
    {
        title: "Conta criada!",
        content: "Sua conta foi criada com sucesso",
        notifiedAt: new Date()
    }
]

const portfolio: StockModel[] = [
    {
        tag: "AAPL",
        enterpriseName: "Apple Inc.",
        shareAmount: 20,
        price: 148.79,
        change: 0.24,
        currentAmount: 2974.2
    }
]

export const accountMock: AccountModel = {
    name: "Carlos Amaral",
    email: "carlosabdoamaral@gmail.com",
    password: "Senha123",
    notifications: notifications,
    amount: 0.0,
    portfolio: portfolio,
    watchlist: []
}