import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
    getLoan = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value;
            console.log(`Empréstimo de ${value} aprovado. Saldo atual: ${this.balance}`);
        } else {
            console.log('Conta inativa. Empréstimo não permitido.');
        }
    }
}
