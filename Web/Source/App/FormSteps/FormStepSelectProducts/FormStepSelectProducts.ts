import { FormStepBase, FormStepEnum } from "App/FormSteps/FormStepBase"; 

export class FormStepSelectProductsViewModel extends FormStepBase {
    
    doInit: () => void;
    
    constructor(params) {

        super(params);
        
        this.formStep = FormStepEnum.FormStepSelectProducts;        
    }
}


export class FormStepSelectProductsComponent {

    constructor() {

        return {
            viewModel: FormStepSelectProductsViewModel,
            template: require("text!./FormStepSelectProductsView.html")
        }
    }
}