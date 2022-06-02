class ContaBancaria{
    constructor(agencia, numeroConta,tipoConta)
    {
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.tipoConta = tipoConta;
        this._saldo = 0;
    }
    sacar(valor){
        if(valor>this._saldo){
            return console.log('Operação negada! Motivo: Saldo Insuficiente!');
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    get saldo(){
        return this._saldo;
    }
}
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numeroConta, cartaoCredito){
        super(agencia, numeroConta);
        this.tipoConta = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
}
class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numeroConta){
        super(agencia, this.numeroConta);
            super(agencia, numeroConta);
            this.tipoConta = 'poupança';
    }
}
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numeroConta){
        super(agencia, numeroConta);
        this.tipoConta = 'Universitária';
    }
    sacar(valor){
        if(valor > 500){
            return 'Operação negada! Motivo: Valor excedente'
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}