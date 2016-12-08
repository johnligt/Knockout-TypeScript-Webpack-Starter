require("expose?window.jQuery!jquery");
//require('jquery.redirect');
import ko = require("knockout");
import validation = require("knockout.validation");
import { FormStepsManager } from "App/FormSteps/FormStepsManager";
import { FormStepBase } from "App/FormSteps/FormStepBase";


export class NavigationViewModel {          

    currentStep: KnockoutObservable<FormStepBase>;

    constructor(params) {
        this.currentStep = FormStepsManager.currentStep;
    }

    submitAanvraag() {
        const result = ko.validation.group(FormStepsManager.currentStep().validationModel, { deep: true });

        if (result().length > 0) {
            result.showAllMessages(true);
            return;
        }
               
    }

    goToNextStep() {        
        FormStepsManager.goToNextStep();
    }

    goToPreviousStep() {
        FormStepsManager.goToPreviousStep();  
    }

    isFirstStep(): boolean {

        if (FormStepsManager.currentStep === undefined || FormStepsManager.currentStep === null) {
            return true;
        }

        if (FormStepsManager.currentStep().order === 0) {
            return true;
        } else {
            return false;
        }
    }

    isLastStep(): boolean {

        if (FormStepsManager.currentStep === undefined || FormStepsManager.currentStep === null) {
            return true;
        }

        if (FormStepsManager.currentStep().order === 5) {
            return true;
        } else {
            return false;
        }
    }
}

export class NavigationComponent {

    constructor() {

        return {
            viewModel: NavigationViewModel,
            template: require("text!./NavigationView.html")
        }
    }
}