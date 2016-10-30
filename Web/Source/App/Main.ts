import * as ko from 'knockout';
require("expose?ko!knockout");
import es6promise = require('es6-promise');

import { ComponentRegistration } from "App/ComponentRegistration";
import { BookingData } from "App/Models/BookingData";
import { ProductService} from "App/Services/ProductService";


export class Main {

    constructor() {
        
        ComponentRegistration.registerComponents();

        const productsPromise = ProductService.getProductList();

        let loadData = es6promise.Promise.all([productsPromise]).then(
            (result) => {

                let viewModel = new BookingData();

                ko.applyBindings(viewModel);    
        });

              
    }

}


let main = new Main();