import * as ko from 'knockout';
require("expose?ko!knockout");

import { ComponentRegistration } from "App/ComponentRegistration";
import { BookingData } from "App/BookingData";


export class Main {

    constructor() {
        
        ComponentRegistration.registerComponents();

        let viewModel: BookingData = new BookingData();

        ko.applyBindings(viewModel);

       
    }

}


let main = new Main();