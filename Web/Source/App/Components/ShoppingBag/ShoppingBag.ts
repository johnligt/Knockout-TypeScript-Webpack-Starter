import { Product } from "App/Models/Product";
import { ProductService } from "App/Services/ProductService";

export class ShoppingBagViewModel {

    selectedProducts: KnockoutComputed<Product[]>;
    hasDiscount: KnockoutObservable<boolean>;
    total: KnockoutObservable<number>;

    constructor(params) {

        this.selectedProducts = ko.computed(() => {

            return ProductService.productList.filter(x => x.isSelected());

        });

        //this.total
    
        this.hasDiscount = ko.observable(true);
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