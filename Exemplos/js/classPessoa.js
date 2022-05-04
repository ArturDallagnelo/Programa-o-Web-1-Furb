class pessoa {
    constructor (pNome) {
        this.nome = pNome;
    }

    getNome() {
        return this.nome;
    }

    setNome(pNome) {
        this.nome = pNome;
    }

    setDtNasc(pDtNasc) {
        this.dtNasc = new Date(pDtNasc);
    }

    getDtNasc() {
        return this.dtNasc;
    }

    idade() {
        var hoje = new Date();
        return hoje.getFullYear() - this.dtNasc.getFullYear();
    }
}