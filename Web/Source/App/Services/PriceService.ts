require(["jquery"]);
import es6promise = require("es6-promise");
import { Price } from "App/Models/Price";
import { ProductService } from "App/Services/ProductService";

export class PriceService {

    private static priceServiceUrl = "/api/prices/";

    static priceList: Price[];

    static selectedDiscount: KnockoutObservable<DiscountEnum>;
    
    static getPriceList(): any {

        let promise = new es6promise.Promise((resolve, reject) => {

            let request = $.ajax({
                dataType: "json",
                url: PriceService.priceServiceUrl    
            });

            request.done((data) => {

                PriceService.priceList = <Price[]>data;

                PriceService.selectedDiscount = ko.observable(DiscountEnum.DefaultDiscount);



                console.log("Price list initialized");
                resolve(request.responseJSON);
                
            }).done(
            () => {
                //resolve(request.responseJSON);
            });
            
            request.fail(
                (jqXhr, textStatus) => {
                    const message = "Request in PriceService failed: " + textStatus;
                    console.log(message);
                    reject(message);
                }
            );

        });

        console.log("Returning Price promise");

        return promise;
    }


    //static setDiscount(discount: DiscountEnum): void {
    //    PriceService.selectedDiscount(discount);

    //}

    static setPrices(): void {
        
        for (let product of ProductService.productList) {
            
            const productPriceObject = PriceService.priceList.filter(x => x.productId === product.productId)[0];

            if (productPriceObject === undefined || productPriceObject === null) {
                continue;
            }

            //if (PriceService.selectedDiscount() === DiscountEnum.DefaultDiscount) {
            //    product.productPrice(productPriceObject.productDefaultPrice);
            //}

            switch (PriceService.selectedDiscount()) {
                case DiscountEnum.NormalDiscount:
                    product.productPrice(productPriceObject.productDiscountPrice);
                    break;
                case DiscountEnum.SuperDiscount:
                    product.productPrice(productPriceObject.productSuperDiscountPrice);
                    break;
                default:
                    product.productPrice(productPriceObject.productDefaultPrice);            
            }
            
        } 
    }
}


export enum DiscountEnum {

    DefaultDiscount,
    NormalDiscount,
    SuperDiscount
}