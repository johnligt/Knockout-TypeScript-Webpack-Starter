import { Customer } from "./Customer";
import { Order } from "./Order";

export class BookingData {

    customer: Customer;
    order: Order;
    hasDiscount: KnockoutObservable<boolean>;


    constructor() {
        //this.title = ko.observable("test");
    }
}