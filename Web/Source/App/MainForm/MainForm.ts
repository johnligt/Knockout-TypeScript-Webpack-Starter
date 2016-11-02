export class MainFormViewModel {

    constructor(params) {
        
    }

}

export class MainFormComponent {

    constructor() {

        return {
            viewModel: MainFormViewModel,
            template: require("text!./MainFormView.html")
        }
    }
}