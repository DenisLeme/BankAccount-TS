
import { CompanyAccount } from './Class/CompanyAccount'
import { PessoaAccount } from './Class/PessoaAccount'





const pessoaAccount: PessoaAccount = new PessoaAccount(1, 'Denis', 1)
console.log(pessoaAccount)
pessoaAccount.deposit()

// pessoaAccount.setName('Denis Leme')
// console.log(pessoaAccount)
// console.log(pessoaAccount.getName())


//const companyAccount: CompanyAccount = new CompanyAccount('Leme', 3)
//console.log(companyAccount.deposit())

