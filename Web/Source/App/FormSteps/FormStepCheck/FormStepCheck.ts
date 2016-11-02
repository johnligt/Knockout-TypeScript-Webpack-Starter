require(["jquery"]);
import ko = require("knockout");
import { FormStepBase, FormStepEnum } from "App/FormSteps/FormStepBase"; 

export class FormStepCheckViewModel extends FormStepBase {
    
    doInit: () => void;
    isLoaded: KnockoutObservable<boolean>;
    
    constructor(params) {

        super(params);

        let self = this;
        
        this.visible = ko.observable(false);
        this.active = ko.observable(true);
        this.isLoaded = ko.observable(false);

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