npx wdio run ./wdio.conf.js
ENV=dev npx wdio run ./wdio.conf.js 
allure open
allure generate  report && allure open
https://webdriver.io/docs/gettingstarted/