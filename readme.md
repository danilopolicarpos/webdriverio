# Pre requisitos Webdriver IO Instalação:

1. Java
2. Node.js installation
3. NPM installation
4. open terminal/command line:
    node -v
    npm -v
5. install Visual Studio Code

# Como rodar os testes
ENV=dev npx wdio run ./wdio.conf.js 
allure open
allure generate  report && allure open
https://webdriver.io/docs/gettingstarted/