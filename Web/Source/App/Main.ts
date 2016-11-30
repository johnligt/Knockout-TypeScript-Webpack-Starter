import * as ko from "knockout";
require("expose?ko!knockout");
import es6promise = require("es6-promise");
import { CustomBindingHandlers } from "App/CustomBindingHandlers";
import { ComponentRegistration } from "App/ComponentRegistration";
import { BookingData } from "App/Models/BookingData";
import { ProductService } from "App/Services/ProductService";
import { PriceService } from "App/Services/PriceService";

export class Main {

    constructor() {

        CustomBindingHandlers.initialize(); 
        ComponentRegistration.registerComponents();
       
        const pricesPromise = PriceService.getPriceList();

        let loadData = es6promise.Promise.all([pricesPromise])
            .then((result) => {

                const productsPromise = ProductService.getProductList();
                return productsPromise;
            })
            .then(
            (result) => {
                
                let viewModel = new BookingData();

                ko.applyBindings(viewModel);

                console.log("Applied bindings");

                Main.initializeValidation();
                
            });
    }

    static initializeValidation() {

        ko.validation.rules["required"].message = "Dit veld is verplicht";
        ko.validation.rules["email"].message = "E-mail adres heeft een ongeldig formaat";
        ko.validation.rules["pattern"].message = "Dit veld heeft een ongeldig formaat";
        ko.validation.rules["maxLength"].message = "Een maximum van {0} karakters is toegestaan";
        ko.validation.rules["minLength"].message = "Een minimum van {0} karakters is vereist";
        ko.validation.rules["min"].message = "Een getal gelijk of groter dan {0} is vereist";
        ko.validation.registerExtenders();

        ko.validation.init({
            insertMessages: false,
            grouping: {
                deep: true,
                live: true,
                observable: true
            }
        }, true);
    }

}

let main = new Main();