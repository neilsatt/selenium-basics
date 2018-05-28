const By = require("selenium-webdriver").By;

class HomePage {

    constructor(driver) {
        this.driver = driver;
        this.locators = {
            inviteeForm: By.id("registrar"),
            //inviteeNameField: By.name("name"),
            inviteeNameField: By.css("#registrar input[name='name']"),
            toggleNonRespondersVisibility: By.css(".main > div input"),
            removeButtonForInvitee: invitee => By.xpath(`//span[text() = "${invitee}"]/../button[last()]`),
            inviteeByName: name => By.xpath(`//span[text() = "${name}"]/..`)
        };
    }

    open() {

        this.driver.get(process.env.URL);
    }

    addInvitee(name) {
        this.driver.findElement(this.locators.inviteeNameField)
            .sendKeys(name);

        this.driver.findElement(this.locators.inviteeForm).submit();
    }

    toggleNonRespondersVisibility() {

        this.driver.findElement(this.locators.toggleNonRespondersVisibility)
            .click();
    }

    findInviteeByName(name) {
        const el = this.driver
            .findElement(this.locators.inviteeByName(name));

        return new Invitee(el);
    }


}

class Invitee {
    constructor(element) {
        this.element = element;
        this.locators = {
            removeButton: By.css("button:last-child"),
            confirmedCheckbox: By.css("input[type='checkbox']")

        };

    }

    remove() {
        this.element
            .findElement(this.locators.removeButton)
            .click();
    }

    toggleConfirmation() {
        this.element
            .findElement(this.locators.confirmedCheckbox)
            .click();

    }

}

module.exports = HomePage;