
import { CompanyAccount } from './Class/CompanyAccount'
import { PessoaAccount } from './Class/PessoaAccount'





const pessoaAccount: PessoaAccount = new PessoaAccount(1, 'Denis', 1)
pessoaAccount.deposit()


const companyAccount: CompanyAccount = new CompanyAccount('Leme', 3)
console.log(companyAccount.deposit())

