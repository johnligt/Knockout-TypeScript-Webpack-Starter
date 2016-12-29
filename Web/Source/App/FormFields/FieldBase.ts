import validation = require("knockout.validation");
import { FormStepsManager } from "App/FormSteps/FormStepsManager";

export class FieldBase  {

    name: string;
    id: string;
    required: boolean;
    field: KnockoutObservable<any>;
    validationModel: KnockoutObservable<any>[];
    onblur: any;

    constructor(params) {

        this.field = params.field; 
        //this.validationModel = params.validationModel;

        this.validationModel = FormStepsManager.currentStep().validationModel;

        this.onblur = params.onblur;

        this.field.extend({ notify: 'always' });

        if (this.validationModel) {
            this.validationModel.push(this.field);
        }

        if (params.required !== undefined) {
            this.field.extend({ required: params.required });   
        }
        if (params.email !== undefined) {
            this.field.extend({ email: params.email });
        }
        if (params.notEqual !== undefined) {
            this.field.extend({ notEqual: params.notEqual });
        }
        if (params.number !== undefined) {
            this.field.extend({ number: params.number });
        }
        if (params.min !== undefined) {
            this.field.extend({ min: params.min });
        }
        if (params.maxLength !== undefined) {
            this.field.extend({ maxLength: params.maxLength });
        }        
        if (params.pattern !== undefined) {
            this.field.extend({ pattern: params.pattern });
        }
        if (params.phone !== undefined) {
            this.field.extend({ phone: params.phone });
        }       
        if (params.date !== undefined) {
            this.field.extend({ date: params.date });
        }

        validation.registerExtenders();
    }
}