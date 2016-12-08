require(["jquery"]);
import ko = require("knockout");
import { FormStepBase, FormStepEnum } from "App/FormSteps/FormStepBase"; 
import { BookingDataService } from "App/Services/BookingDataService";
import { BookingData } from "App/Models/BookingData";

export class FormStepCheckViewModel extends FormStepBase {
    
    doInit: () => void;
    isLoaded: KnockoutObservable<boolean>;
    bookingData: BookingData;
    total: number;
    
    constructor(params) {

        super(params);
        
        this.visible = ko.observable(false);
        this.active = ko.observable(true);
        this.isLoaded = ko.observable(false);

        this.bookingData = BookingDataService.getBookingData();
        this.total = BookingDataService.getTotal();

        this.formStep = FormStepEnum.FormStepCheck;
        
    }
}


export class FormStepCheckComponent {

    constructor() {

        return {
            viewModel: FormStepCheckViewModel,
            template: require("text!./FormStepCheckView.html")
        }
    }
}