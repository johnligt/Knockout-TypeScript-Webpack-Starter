import { PriceService, DiscountEnum } from "App/Services/PriceService";

export class DiscountViewModel {

    selectedDiscount: KnockoutObservable<DiscountEnum>;

    constructor(params) {

        this.selectedDiscount = PriceService.selectedDiscount;

        this.selectedProducts = ko.computed(() => {

            return ProductService.productList.filter(x => x.isSelected());

        });

    }

}

export class DiscountComponent {

    constructor() {

        return {
            viewModel: DiscountViewModel,
            template: require("text!./DiscountView.html")
        }
    }
}