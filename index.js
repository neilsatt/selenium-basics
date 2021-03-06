const fs = require("fs");

const selenium = require("selenium-webdriver");
const By = selenium.By;

//import file for HomePage file/module
const HomePage = require('./pages/home');

const driver = new selenium.Builder()
    .forBrowser("chrome")
    .build();

//new instance of HomePage Modile with selenium instance passed in
const homePage = new HomePage(driver);

homePage.open();

//list of invitee names
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

//store By locators 

invitees.forEach(homePage.addInvitee, homePage);

homePage
    .findInviteeByName("David Riesz")
    .remove();

homePage
    .findInviteeByName("Jennifer Nordell")
    .toggleConfirmation();

driver.takeScreenshot().then((image, err) => {
    fs.writeFile("selenium-layout.png", image, "base64",
        err => console.error(err));

});

//homePage.toggleNonRespondersVisibility();
/* 
 Command to run in terminal
 URL=http://port-80-m4qtmkkgh6.treehouse-app.com/ node index.js

*/



