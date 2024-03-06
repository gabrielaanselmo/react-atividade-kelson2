class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissao: ${this.profissao}`);
    }
}

const pessoa = new Pessoa('Matheus', 30, 'Desenvolvedor');
pessoa.exibirInfo();