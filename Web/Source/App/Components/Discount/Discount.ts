import { PriceService, DiscountEnum } from "App/Services/PriceService";

export class DiscountViewModel {

    selectedDiscount: KnockoutObservable<DiscountEnum>;

    constructor(params) {

        this.selectedDiscount = PriceService.selectedDiscount;

        PriceService.selectedDiscount.subscribe(() => {
            PriceService.setPrices();
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