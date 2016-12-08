import { Product } from "App/Models/Product";
import { ProductService } from "App/Services/ProductService";
import { BookingDataService } from "App/Services/BookingDataService";
import { BookingData } from "App/Models/BookingData";

export class ShoppingBagViewModel {

    selectedProducts: KnockoutComputed<Product[]>;   
    total: KnockoutComputed<number>;

    constructor(params) {
        
        this.selectedProducts = ko.computed(() => {

            return ProductService.productList.filter(x => x.isSelected());

        });

        this.total = ko.computed(() => {
            return BookingDataService.getTotal();            
        });
            
    }
}

export class ShoppingBagComponent {

    constructor() {

        return {
            viewModel: ShoppingBagViewModel,
            template: require("text!./ShoppingBagView.html")
        }
    }
}