require("expose?window.jQuery!jquery");
//require('jquery.redirect');
import ko = require('knockout');
import validation = require('knockout.validation');
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

        //let saveStatePromise = StateService.saveState();

        //(<any>$).blockUI({ message: '<h1>Een ogenblik geduld</h1><img src="/Static/img/loader.gif" /><p>Uw aanvraag wordt verzonden...' });

        //saveStatePromise.then(
        //    () => {
        //        let aanvraag: IAanvraag = AanvraagService.aanvraag();
        //        let persoonNaam = this.getPersoonNaam(aanvraag.verzekerden.verzekeringnemer.persoon);
        //        AanvraagService.submitAanvraag().done((data) => {
        //            let url = this.getBedanktUrl(aanvraag);
        //            (<any>$).redirect(url, { name: persoonNaam });
        //        });
        //    }
        //);
                
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