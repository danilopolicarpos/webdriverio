# language: pt
Funcionalidade: Busca 
Interação com a torre de produto (GPP) e Avability para disponibilidade de estoque.

Cenário: Buscar produto por nome no GSP
    Dado que eu esteja na home com cn ativa
    Quando realizar uma busca de produto por nome
    Então vejo o resultado da busca por nome

Cenário: Buscar produto por codigo no GSP
    Dado que eu esteja na home com cn ativa
    Quando realizar uma busca de produto por codigo 
    Então vejo o resultado da busca por codigo

Cenário: Buscar produto inexistente no GSP
    Dado que eu esteja na home com cn ativa
    Quando realizar uma busca de produto inexistente
    Então vejo o resultado da busca para produto inexistente

Cenário: Agregar produto no carrinho com sucesso 
    Dado que eu esteja na home com cn ativa
    E realizo uma busca de produto por codigo
    Quando agregar o produto ao carrinho
    Então vejo a mensagem produto agregado com sucesso