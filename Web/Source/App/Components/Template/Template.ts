export class TemplateViewModel {

    constructor(params) {
        
    }

}

export class TemplateComponent {

    constructor() {

        return {
            viewModel: TemplateViewModel,
            template: require("text!./TemplateView.html")
        }
    }
}