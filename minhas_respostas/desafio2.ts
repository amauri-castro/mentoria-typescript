enum ListaProfissao {
    Atriz,
    Padeiro,
    Professor,
    Secretaria
}

type Humano = {
    nome: string,
    idade: number,
    profissao: ListaProfissao
}

let pessoa1: Humano = {
    nome: 'Andre',
    idade: 26,
    profissao: ListaProfissao.Padeiro
}

let pessoa2: Humano = {
    nome: 'Carla',
    idade: 25,
    profissao: ListaProfissao.Atriz
}

let pessoa3: Humano = {
    nome: 'Mauricio',
    idade: 30,
    profissao: ListaProfissao.Professor
}

let pessoa4: Humano = {
    nome: 'Aline',
    idade: 28,
    profissao: ListaProfissao.Professor
}