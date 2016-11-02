require(["jquery"]);
import ko = require("knockout");
import { FormStepBase, FormStepEnum } from "App/FormSteps/FormStepBase"; 

export class FormStepPersonalDetailsViewModel extends FormStepBase {
    
    doInit: () => void;
    isLoaded: KnockoutObservable<boolean>;
    
    constructor(params) {

        super(params);

        let self = this;
        
        this.visible = ko.observable(false);
        this.active = ko.observable(true);
        this.isLoaded = ko.observable(false);

        this.formStep = FormStepEnum.FormStepPersonalDetails;
        
    }
}


export class FormStepPersonalDetailsComponent {

    constructor() {

        return {
            viewModel: FormStepPersonalDetailsViewModel,
            template: require("text!./FormStepPersonalDetailsView.html")
        }
    }
}