import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { BonusAccount } from './class/BonusAccount';

const companyAccount: CompanyAccount = new CompanyAccount("Empresa X", 654321);
companyAccount.deposit(1000);

const peopleAccount: PeopleAccount = new PeopleAccount("Joao", 123456, 98765432100);
console.log(peopleAccount);
/* peopleAccount.setName("Maria");

peopleAccount.deposit(500);
console.log(peopleAccount);
console.log(peopleAccount.getName()); */
peopleAccount.deposit(500);

const contaBonus = new BonusAccount('Maria', 12345);

contaBonus.deposit(100); // Deve adicionar 110 ao saldo
contaBonus.getBalance();
