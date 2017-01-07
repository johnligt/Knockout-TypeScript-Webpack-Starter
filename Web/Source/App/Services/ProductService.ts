require(["jquery"]);
import es6promise = require("es6-promise");
import { Product } from "App/Models/Product";
import { PriceService } from "App/Services/PriceService";

export class ProductService {

    private static productServiceUrl = "/api/products/";

    public static productList: Product[];
    
    static getProductList(): any {

        let promise = new es6promise.Promise((resolve, reject) => {

            let request = $.ajax({
                dataType: "json",
                url: ProductService.productServiceUrl    
            });

            request.done((data) => {
                ProductService.productList = <Product[]>data;

                let priceList = PriceService.priceList;

                // Set all products to "not selected" on first load.
                // Also set the prices of the products to the default price from
                // the prices service. 
                // I.e. the ProductService depends on the PriceService.
                for (let product of ProductService.productList) {

                    product.isSelected = ko.observable(false);

                    const productPriceObject = priceList.filter(x => x.productId === product.productId)[0];

                    if (productPriceObject !== undefined && productPriceObject !== null) {
                        product.productPrice = ko.observable(productPriceObject.productDefaultPrice);
                    }                    
                } 
                
                console.log("Product list initialized");
                
            }).done(
            () => {
                resolve(request.responseJSON);
            });
            
            request.fail(
                (jqXhr, textStatus) => {
                    let message = "Request in ProductService failed: " + textStatus;
                    console.log(message);
                    reject(message);
                }
            );

        });

        console.log("Returning Products promise");

        return promise;
    }

   
}