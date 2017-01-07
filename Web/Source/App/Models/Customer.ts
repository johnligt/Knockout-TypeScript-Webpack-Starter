export class Customer {

    lastName: KnockoutObservable<string>;
    firstName: KnockoutObservable<string>;
    street: KnockoutObservable<string>;
    houseNumber: KnockoutObservable<string>;
    city: KnockoutObservable<string>;
    telephone: KnockoutObservable<string>;
    email: KnockoutObservable<string>;

    constructor() {
        this.lastName = ko.observable("");
        this.firstName = ko.observable("");
        this.street = ko.observable("");
        this.houseNumber = ko.observable("");
        this.city = ko.observable("");
        this.telephone = ko.observable("");
        this.email = ko.observable("");
    }

}