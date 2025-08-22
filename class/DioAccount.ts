export abstract class DioAccount {
    private name: string;
    private readonly accountNumber: number;  
    protected balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }       

    setName = (name: string): void => {
        this.name = name;
        console.log(`Nome alterado com sucesso para ${this.name}`);
    }

    getName = (): string => {
        return this.name;
    }    

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            if (value > 0) {
                this.balance += value;
                console.log(`Você depositou ${value}. Saldo atual: ${this.balance}`);
            } else {
                console.log("Valor de depósito inválido.");
            }
        }
    }

    withdraw = (value: number): void => {
        if (this.validateStatus()) {
            if (value > 0 && this.balance >= value) {
                this.balance -= value;
                console.log(`Você sacou ${value}. Saldo atual: ${this.balance}`);
            } else {
                console.log("Saldo insuficiente ou valor inválido para saque.");
            }
        }
    }

    getBalance = (): void => {
        console.log(this.balance);
    }

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        } else {
            throw new Error("Conta inativa");
        }
    }
}
