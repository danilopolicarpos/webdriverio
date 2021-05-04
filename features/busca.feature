# language: pt
Funcionalidade: Busca 

Cenário: Buscar produto por nome no GSP
    Dado que eu esteja na pagina de login com cn ativa
    Quando realizar uma busca de produto por nome
    Então vejo o resultado da busca por nome

Cenário: Buscar produto por codigo no GSP
    Dado que eu esteja na pagina de login com cn ativa
    Quando realizar uma busca de produto por codigo 
    Então vejo o resultado da busca por codigo

Cenário: Buscar produto inexistente no GSP
    Dado que eu esteja na pagina de login com cn ativa
    Quando realizar uma busca de produto inexistente 
    Então vejo o resultado da busca