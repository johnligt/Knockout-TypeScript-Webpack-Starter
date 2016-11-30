import { Product } from "App/Models/Product";
import { ProductService } from "App/Services/ProductService";
//require(["App/CustomBindingHandlers"]);

export class ProductListViewModel {

    products: Product[];

    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;

    hasDiscount: KnockoutObservable<boolean>;

    constructor(params) {

        this.products = ProductService.productList;

        this.addProduct = (product: Product) => {
            product.isSelected(true);            
            console.log(`Added ${product.productName}`);
        }

        this.removeProduct = (product: Product) => {
            product.isSelected(false);            
            console.log(`Removed ${product.productName}`);
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