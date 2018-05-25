class HomePage {
    constructor(driver){
        this.driver = driver;
        this.locators = {
            inviteeForm: By.id('registrar'),
            inviteeNameField: By.css('name'),
            toggleNonRespondersVisibility: By.css('.main > div input'),
           // removeButtonForInvitee: invitee => By.xpath(`//span[text() ="${invisible}"`)
    };
    }

    open(){
        this.driver.get(process.env.URL);
    }   

     addInvitee(name){
        this.driver.findElement(this.locators.inviteeForm)
        .sendKeys(name);
        this.driver.findElement(this.locators.inviteeForm).submit();
    };

     removeInvitee(invitee){
            this.driver.findElement(this.locators.removeButtonForInvitee(invitee))
            .click();
    }

     toggleNonRespondersVisibility() {
            this.driver.findElement(this.locators.toggleNonRespondersVisibility)
                    .click();
    }

}
module.exports = HomePage;