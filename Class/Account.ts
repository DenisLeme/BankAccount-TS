export abstract class Account {
    name: string
    accountNumber: number
    balance: number

    constructor(name:string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
        this.balance = 0
    }

    deposit =():void =>{
        console.log('Você Depositou')
    }
    withdraw = ():void  => {
        console.log('Você Sacou')
    }
    getBalance = ():void  =>{
        console.log(this.balance)
    }
}