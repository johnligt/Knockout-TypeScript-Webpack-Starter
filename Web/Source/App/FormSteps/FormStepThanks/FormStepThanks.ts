require(["jquery"]);
import ko = require("knockout");
import { FormStepBase, FormStepEnum } from "App/FormSteps/FormStepBase"; 
import { BookingDataService } from "App/Services/BookingDataService";
import { BookingData } from "App/Models/BookingData";

export class FormStepThanksViewModel extends FormStepBase {
    
    doInit: () => void;
    isLoaded: KnockoutObservable<boolean>;
    bookingData: BookingData;
    total: number;
    
    constructor(params) {

        super(params);
        
        this.visible = ko.observable(false);
        this.active = ko.observable(true);
        this.isLoaded = ko.observable(false);
        
        this.formStep = FormStepEnum.FormStepThanks;
        
    }
}


export class FormStepThanksComponent {

    constructor() {

        return {
            viewModel: FormStepThanksViewModel,
            template: require("text!./FormStepThanksView.html")
        }
    }
}