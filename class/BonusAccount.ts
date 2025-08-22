import { DioAccount } from './DioAccount';

export class BonusAccount extends DioAccount {
    deposit = (value: number): void => {
        // Acessando o método privado via this['validateStatus']()
        if (this['validateStatus']()) {
            const bonus = 10;
            this.balance += value + bonus;
            console.log(`Depósito de ${value} realizado com bônus de ${bonus}. Saldo atual: ${this.balance}`);
        }
    }
}
