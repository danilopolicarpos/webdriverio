# Pre requisitos Webdriver IO Instalação:

1. Java
2. Node.js installation
3. NPM installation
4. open terminal/command line:
    node -v
    npm -v
5. install Visual Studio Code

# Atualizando o projeto
npm install --safe

# Como rodar os testes apontando para QA
ENV=qa npx wdio run ./wdio.conf.js 

# Como rodar os testes apontando para HML
ENV=hml npx wdio run ./wdio.conf.js 

#Dicas
https://webdriver.io/docs/gettingstarted/