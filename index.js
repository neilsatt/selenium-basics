
const By = require("selenium-webdriver").By;

const HomePage = require('./pages/home');


const driver = new selenium.Builder()
        .forBrowser("chrome")
        .build();

const homePage = new HomePage(driver);
homePage.open();

driver.get(process.env.URL);

const invitees = [
        'Gonzalo Torres del Fierro',
        'Shadd Anderson',
        'George Aparece',
        'Shadab Khan',
        'Joseph Michael Casey',
        'Jennifer Nordell',
        'Faisal Albinali',
        'Taron Foxworth',
        'David Riesz',
        'Maicej Torbus',
        'Martin Luckett',
        'Joel Bardsley',
        'Reuben Varzea',
        'Ken Alger',
        'Amrit Pandey',
        'Rafal Rudzinski',
        'Brian Lynch',
        'Lupe Camacho',
        'Luke Fiji',
        'Sean Christensen',
        'Philip Graf',
        'Mike Norman',
        'Michael Hulet',
        'Brent Suggs'
     ];




function addInvitee(name){
        driver.findElement(locators.inviteeForm)
        .sendKeys(name);
        driver.findElement(locators.inviteeForm).submit();
};

function toggleNonRespondersVisibility() {
        driver.findElement(locators.toggleNonRespondersVisibility)
                .click();
}

invitees.forEach(addInvitee);

addInvitee('John Fods');
addInvitee('Ted Gois');

toggleNonRespondersVisibility();
/* 
 Command to run in terminal
 URL=http://port-80-m4qtmkkgh6.treehouse-app.com/ node index.js

*/



