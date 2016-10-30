require(["jquery"]);
import es6promise = require('es6-promise');
import {Product} from "App/Models/Product";

export class ProductService {

    private static productServiceUrl = '/api/products/';

    public static productList: Product[];
    
    static getProductList(): any {

        let promise = new es6promise.Promise((resolve, reject) => {

            let request = $.ajax({
                dataType: "json",
                url: ProductService.productServiceUrl    
            });

            request.done((data) => {
                ProductService.productList = <Product[]>data;
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