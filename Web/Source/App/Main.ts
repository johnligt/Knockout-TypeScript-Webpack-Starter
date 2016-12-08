import * as ko from "knockout";
require("expose?ko!knockout");
import es6promise = require("es6-promise");
import { CustomBindingHandlers } from "App/CustomBindingHandlers";
import { ComponentRegistration } from "App/ComponentRegistration";
import { BookingData } from "App/Models/BookingData";
import { ProductService } from "App/Services/ProductService";
import { PriceService } from "App/Services/PriceService";
import { LabelService } from "App/Services/LabelService";
import { BookingDataService } from "App/Services/BookingDataService";

export class Main {

    constructor() {

        CustomBindingHandlers.initialize(); 
        ComponentRegistration.registerComponents();
       
        const pricesPromise = PriceService.getPriceList();
        const labelsPromise = LabelService.getLabels();

        let loadData = es6promise.Promise.all([pricesPromise, labelsPromise])
            .then((result) => {

                const productsPromise = ProductService.getProductList();
                return productsPromise;
            })
            .then(
            (result) => {
                
                let viewModel = new BookingData();

                ko.applyBindings(viewModel);

                BookingDataService.setBookingData(viewModel);

                console.log("Applied bindings");

                Main.initializeValidation();
                
            });
    }

    static initializeValidation() {

        ko.validation.rules["required"].message = "Required field";
        ko.validation.rules["email"].message = "Invalid email format";
        ko.validation.rules["pattern"].message = "Invalid field value";
        ko.validation.rules["maxLength"].message = "A maximum of {0} characters is allowed";
        ko.validation.rules["minLength"].message = "A minimum of {0} characters is allowed";
        ko.validation.rules["min"].message = "A number greater than or equal to {0} is required";
        ko.validation.registerExtenders();

        ko.validation.init({
            insertMessages: true,
            grouping: {
                deep: true,
                live: true,
                observable: true
            }
        }, true);
    }

}

let main = new Main();