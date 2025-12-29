function RankDoJogador(vitorias, derrotas) {
    let totalDeVitorias = vitorias - derrotas;

    if (totalDeVitorias < 0) {
        return "O Jogador tem o saldo de vitórias negativo";
    }

    if (totalDeVitorias < 10) {
        return `O Herói tem de saldo de ${totalDeVitorias} está no nível de Ferro`;
    } else if (totalDeVitorias >= 10 && totalDeVitorias <= 20) {
        return `O Herói tem de saldo de ${totalDeVitorias} está no nível de Bronze`;
    } else if (totalDeVitorias > 20 && totalDeVitorias <= 50) {
        return `O Herói tem de saldo de ${totalDeVitorias} está no nível de Prata`;
    }  else if (totalDeVitorias > 50 && totalDeVitorias <= 80) {
        return `O Herói tem saldo de ${totalDeVitorias} está no nível de Ouro`;
    } else if (totalDeVitorias > 80 && totalDeVitorias <= 90) {
        return `O Herói tem saldo de ${totalDeVitorias} está no nível de Diamante`;
    } else if (totalDeVitorias > 90 && totalDeVitorias <= 100) {
        return `O Herói tem saldo de ${totalDeVitorias} está no nível de Lendário`;
    } else if (totalDeVitorias > 100) {
        return `O Herói tem saldo de ${totalDeVitorias} está no nível de Imortal`;
    }
}

console.log(RankDoJogador(0, 3));