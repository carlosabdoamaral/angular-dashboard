import { AccountModel, DailyReportModel, NotificationModel, StockModel } from "./models";

const notifications: NotificationModel[] = [
    {
        title: "Conta criada!",
        content: "Sua conta foi criada com sucesso",
        notifiedAt: new Date()
    }
]

const appl = {
    tag: "AAPL",
    enterpriseName: "Apple Inc.",
    shareAmount: 20,
    price: 148.79,
    change: 0.24,
    currentAmount: 2974.2
}
const portfolio: StockModel[] = [
    appl,
    appl,
    appl,
    appl,
    appl,
    appl,
]

function generateRandomDate(from: Date, to: Date) {
    return new Date(
        from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
}

function generateDailyReportList(): DailyReportModel[] {
    let list = [
        { x: new Date(2023, 0, 1), y: 1.30072410817561 },
        { x: new Date(2023, 0, 2), y: 1.30072410817561 },
    ]
    for (let i = 0; i <= 50; i++) {
        const x = generateRandomDate(new Date(2023, 0, 1), new Date())
        const y = Math.random() * 100

        list.push({ x, y })
    }

    list = list.sort((a, b) => a.x.getTime() - b.x.getTime())

    return list
}

export const accountMock: AccountModel = {
    name: "Carlos Amaral",
    email: "carlosabdoamaral@gmail.com",
    password: "Senha123",
    notifications: notifications,
    amount: 0.0,
    portfolio: portfolio,
    watchlist: [appl],
    dailyReportList: generateDailyReportList()
}