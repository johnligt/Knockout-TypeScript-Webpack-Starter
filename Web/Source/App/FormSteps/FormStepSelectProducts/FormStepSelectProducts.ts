require(["jquery"]);
import ko = require("knockout");
import { FormStepBase, FormStepEnum } from "App/FormSteps/FormStepBase"; 

export class FormStepSelectProductsViewModel extends FormStepBase {
    
    doInit: () => void;
    isLoaded: KnockoutObservable<boolean>;
    
    constructor(params) {

        super(params);

        let self = this;
        
        this.visible = ko.observable(true);
        this.active = ko.observable(true);
        this.isLoaded = ko.observable(false);

        this.formStep = FormStepEnum.FormStepSelectProducts;
        
        
    }
}


export class FormStepSelectProductsComponent {

    constructor() {

        return {
            viewModel: FormStepSelectProductsViewModel,
            template: require("text!./FormStepSelectProductsView")
        }
    }
}