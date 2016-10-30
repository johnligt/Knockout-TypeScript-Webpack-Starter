import { Product } from "App/Models/Product";
import { ProductService } from "App/Services/ProductService";

export class ProductListViewModel {

    products: Product[];

    constructor(params) {

        this.products = ProductService.productList;

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