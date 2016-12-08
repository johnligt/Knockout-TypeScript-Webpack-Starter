import { FieldBase } from "App/FormFields/FieldBase";
import { FormStepsManager } from "App/FormSteps/FormStepsManager";
import { Label } from "App/Models/Label";
import { LabelService } from "App/Services/LabelService"

export class TextFieldViewModel extends FieldBase {

    label: Label;
    cssClass: string;
    placeholder: string;
    phone: boolean;
    readonly: string;
   
    constructor(params) {

        super(params);

        this.id = params.name;
        this.name = params.name;
        this.cssClass = params.cssClass;
        this.placeholder = params.placeholder;        
        this.readonly = params.readonly;
        this.phone = params.phone;

        this.label = LabelService.getLabel(params.labelKey);

        this.field.extend({ nohtml: true });

        if (this.readonly) {
            this.cssClass = "read-only";
        }       
    }
}

export class TextFieldComponent {

    constructor() {

        return {
            viewModel: TextFieldViewModel,
            template: require("text!./TextFieldView.html")
        }
    }
}