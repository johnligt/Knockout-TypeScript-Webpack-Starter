import ko = require('knockout');
import { FormStepBase, FormStepEnum} from './FormStepBase';

export class FormStepsManager {
    
    static formSteps: Array<FormStepBase>;
    static currentStep: KnockoutObservable<FormStepBase>;


    static formStepsLoaded: KnockoutObservable<boolean> = ko.observable(false);
 
    static addFormStep(formStep: FormStepBase) {

        if (FormStepsManager.formSteps === undefined) {
            FormStepsManager.formSteps = new Array<FormStepBase>();
        }
        
        FormStepsManager.formSteps[formStep.order] = formStep;     

        if (FormStepsManager.currentStep === undefined && formStep.order === 0) {
            FormStepsManager.currentStep = ko.observable(formStep);

            FormStepsManager.formStepsLoaded(true);            
        }
    }


    static goToNextStep() {
       
        const result = ko.validation.group(FormStepsManager.currentStep().validationModel, { deep: true });

        if (result().length > 0) {
            result.showAllMessages(true);
            return;
        }
        
        let nextSteps = FormStepsManager.formSteps.filter(x => x.active()).filter(x => x.order > FormStepsManager.currentStep().order);

        let nextStep = nextSteps[0];

        FormStepsManager.currentStep().visible(false);
        nextStep.visible(true);
                        
        FormStepsManager.currentStep(nextStep);
        
        location.hash = FormStepsManager.currentStep().formStep.toString();

        //(<any>window).scrollTo(0,0);
    }

    static goToPreviousStep() {
        
        const previousSteps = FormStepsManager.formSteps.filter(x => x.order < FormStepsManager.currentStep().order).filter(x => x.active());
        const previousStep = previousSteps[previousSteps.length - 1];

        // This clears the validation model because field validation
        // is registered every time the field is shown on a form.
        FormStepsManager.currentStep().validationModel = new Array<KnockoutObservable<any>>();

        FormStepsManager.currentStep().visible(false);
        previousStep.visible(true);
        
        FormStepsManager.currentStep(previousStep);

        location.hash = FormStepsManager.currentStep().formStep.toString();

        //(<any>window).scrollTo(0, 0);
    }

    static goToStep(targetFormStep: FormStepEnum, anchor: string, checked: boolean) {  
       
        // This clears the validation model because field validation
        // is registered every time the field is shown on a form.
        FormStepsManager.currentStep().validationModel = new Array<KnockoutObservable<any>>();
        FormStepsManager.currentStep().visible(false);

        let target = FormStepsManager.formSteps.filter(x => x.formStep === targetFormStep)[0];

        target.visible(true);

        FormStepsManager.currentStep(target);
        
        location.hash = FormStepsManager.currentStep().formStep.toString();

    }
}