import { FormStepBase, FormStepEnum } from "App/FormSteps/FormStepBase"; 
import { BookingDataService } from "App/Services/BookingDataService";
import { BookingData } from "App/Models/BookingData";

export class FormStepThanksViewModel extends FormStepBase {
 
    bookingData: BookingData;
    total: number;
    
    constructor(params) {

        super(params);
               
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