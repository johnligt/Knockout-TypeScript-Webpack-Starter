export class ShoppingBagViewModel {

    constructor(params) {
        
    }

}

export class ShoppingBagComponent {

    constructor() {

        return {
            viewModel: ShoppingBagViewModel,
            template: require("text!./ShoppingBagView.html")
        }
    }
}