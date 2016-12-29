import { FieldBase } from "App/FormFields/FieldBase";
import { FormStepsManager } from "App/FormSteps/FormStepsManager";
import { Label } from "App/Models/Label";
import { LabelService } from "App/Services/LabelService"


export class TextAreaViewModel extends FieldBase {

    label: Label;
    cssClass: string;
    placeholder: string;
    readonly: string;

    constructor(params) {  

        super(params);

        this.id = params.name;
        this.name = params.name;
        this.cssClass = params.cssClass;
        this.placeholder = params.placeholder;
        this.readonly = params.readonly;
        
        this.label = LabelService.getLabel(params.labelKey);

        this.field.extend({ nohtml: true });

        if (this.readonly) {
            this.cssClass = "read-only";
        }       
    }
}

export class TextAreaComponent {

    constructor() {

        return {
            viewModel: TextAreaViewModel,
            template: require("text!./TextAreaView.html")
        }
    }
}