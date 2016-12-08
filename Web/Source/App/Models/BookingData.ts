import { Customer } from "./Customer";
import { Order } from "./Order";

export class BookingData {

    customer: Customer;
    order: Order;


    constructor() {
        this.customer = new Customer();
        this.order = new Order();      
    }
}