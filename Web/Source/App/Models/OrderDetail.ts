import { Product } from "./Product";

export class OrderDetail {

    product: KnockoutObservable<Product>;
    numberOfItems: KnockoutObservable<number>;
    
}