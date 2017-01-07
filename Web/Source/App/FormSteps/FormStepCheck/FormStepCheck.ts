import { FormStepBase, FormStepEnum } from "App/FormSteps/FormStepBase"; 
import { BookingDataService } from "App/Services/BookingDataService";
import { BookingData } from "App/Models/BookingData";

export class FormStepCheckViewModel extends FormStepBase {
    
    doInit: () => void;
    bookingData: BookingData;
    total: KnockoutComputed<number>;
    
    constructor(params) {

        super(params);
        
        this.bookingData = BookingDataService.getBookingData();

        this.total = ko.computed(() => {
            return BookingDataService.getTotal();
        });

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