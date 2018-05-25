class HomePage {
    constructor(driver){
        this.driver = driver;
        this.locators = {
            inviteeForm: By.id('registrar'),
            inviteeNameField: By.name('name'),
            toggleNonRespondersVisibility: By.css('.main > div input')
    };
    }

    open(){
        this.driver.get(process.env.URL);
    }
}

module.exports = HomePage;