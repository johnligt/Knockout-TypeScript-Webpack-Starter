import { Product } from "App/Models/Product";
import { ProductService } from "App/Services/ProductService";

export class ProductListViewModel {

    products: Product[];

    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;

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