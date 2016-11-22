require(["jquery"]);
import es6promise = require("es6-promise");
import {Price} from "App/Models/Price";

export class PriceService {

    private static priceServiceUrl = "/api/prices/";

    public static priceList: Price[];
    
    static getPriceList(): any {

        let promise = new es6promise.Promise((resolve, reject) => {

            let request = $.ajax({
                dataType: "json",
                url: PriceService.priceServiceUrl    
            });

            request.done((data) => {
                PriceService.priceList = <Price[]>data;
  
                console.log("Price list initialized");
                
            }).done(
            () => {
                resolve(request.responseJSON);
            });
            
            request.fail(
                (jqXhr, textStatus) => {
                    let message = "Request in PriceService failed: " + textStatus;
                    console.log(message);
                    reject(message);
                }
            );

        });

        console.log("Returning Price promise");

        return promise;
    }

   
}