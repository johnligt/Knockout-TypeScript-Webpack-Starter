import { Product } from "App/Models/Product";
import { ProductService } from "App/Services/ProductService";
import { BookingDataService } from "App/Services/BookingDataService";
import { BookingData } from "App/Models/BookingData";

export class ProductListViewModel {

    products: Product[];

    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;

    hasDiscount: KnockoutObservable<boolean>;

    bookingData: BookingData;

    constructor(params) {

        this.products = ProductService.productList;
        this.bookingData = BookingDataService.getBookingData();
        
        this.addProduct = (product: Product) => {
            BookingDataService.addProduct(product);          
        }

        this.removeProduct = (product: Product) => {
            BookingDataService.removeProduct(product);            
        }

        this.hasDiscount = ko.observable(true);
    }
}

export class ProductListComponent {

    constructor() {

        return {
            viewModel: ProductListViewModel,
            template: require("text!./ProductListView.html")
        }
    }
}