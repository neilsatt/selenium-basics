const selenium = require("selenium-webdriver");
const By = selenium.By;

const driver = new selenium.Builder()
        .forBrowser("chrome")
        .build();

driver.get(process.env.URL);

const locators = {
        inviteeForm: By.id('registrar'),
        inviteeNameField: By.name('name')
};



function addInvitee(name){
        driver.findElement(locators.inviteeForm)
        .sendKeys(name);
        driver.findElement(locators.inviteeForm).submit();
};

addInvitee('John Fods');
addInvitee('Ted Gois');

/* 
 Command to run in terminal
 URL=http://port-80-m4qtmkkgh6.treehouse-app.com/ node index.js

*/



