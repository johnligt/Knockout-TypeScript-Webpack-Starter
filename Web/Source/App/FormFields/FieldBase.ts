//import ko = require('knockout');
import validation = require('knockout.validation');

export class FieldBase  {

    name: string;
    id: string;
    required: boolean;
    field: KnockoutObservable<any>;
    validationModel: KnockoutObservable<any>[];
    onblur: any;

    constructor(params) {

        this.field = params.field; 
        this.validationModel = params.validationModel;
        this.onblur = params.onblur;

        // why doesnt this work?! http://stackoverflow.com/questions/21050057/force-knockout-subscription-to-trigger-after-focus-blur
        this.field.extend({ notify: 'always' });
        //this.field.extend({ valueUpdate: 'blur' });

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
        if (params.tussenvoegsel !== undefined) {
            this.field.extend({ tussenvoegsel: params.tussenvoegsel });
        }
        if (params.geslachtRequired !== undefined) {
            this.field.extend({ geslachtRequired: params.geslachtRequired });
        }
        if (params.postcode !== undefined) {
            this.field.extend({ postcode: params.postcode });
        }
        if (params.pattern !== undefined) {
            this.field.extend({ pattern: params.pattern });
        }
        if (params.phone !== undefined) {
            this.field.extend({ phone: params.phone });
        }
        if (params.iban !== undefined) {
            this.field.extend({ iban: params.iban });
        }
        if (params.birthdate !== undefined) {
            this.field.extend({ birthdate: params.birthdate });
        }
        if (params.date !== undefined) {
            this.field.extend({ date: params.date });
        }

        validation.registerExtenders();
    }
}