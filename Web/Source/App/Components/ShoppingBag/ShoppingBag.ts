import { Product } from "App/Models/Product";
import { ProductService } from "App/Services/ProductService";

export class ShoppingBagViewModel {

    selectedProducts: KnockoutComputed<Product[]>;   
    total: KnockoutComputed<number>;

    constructor(params) {

        let self = this;

        this.selectedProducts = ko.computed(() => {

            return ProductService.productList.filter(x => x.isSelected());

        });

        this.total = ko.computed(() => {

            let total = 0;

            for (let product of self.selectedProducts()) {
                total += product.productPrice();
            }

            return total;
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