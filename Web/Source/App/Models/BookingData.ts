import { Customer } from "./Customer";
import { Product } from "App/Models/Product";

export class BookingData {

    customer: Customer;
    selectedProducts: KnockoutObservableArray<Product>;
    comments: KnockoutObservable<string>;

    constructor() {
        this.customer = new Customer();
        this.selectedProducts = ko.observableArray<Product>();
        this.comments = ko.observable("");
    }
}