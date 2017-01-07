import { Label } from 'App/Models/Label';
import { LabelService } from 'App/Services/LabelService';
import { FormStepsManager } from 'App/FormSteps/FormStepsManager';

export class LabelViewModel {

    label: Label;
      
    constructor(params) {
        this.label = LabelService.getLabel(params.labelKey);                
    }
}

export class LabelComponent {

    constructor() {

        return {
            viewModel: LabelViewModel,
            template: require("text!./LabelView.html")
        }
    }
}