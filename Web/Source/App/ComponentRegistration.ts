import { MainFormComponent } from "App/MainForm/MainForm";
import { ProductListComponent } from "App/Components/ProductList/ProductList";
import { ShoppingBagComponent } from "App/Components/ShoppingBag/ShoppingBag";
import { DiscountComponent } from "App/Components/Discount/Discount";
import { FormStepSelectProductsComponent } from "App/FormSteps/FormStepSelectProducts/FormStepSelectProducts";
import { FormStepPersonalDetailsComponent } from "App/FormSteps/FormStepPersonalDetails/FormStepPersonalDetails";
import { FormStepCheckComponent } from "App/FormSteps/FormStepCheck/FormStepCheck";
import { FormStepThanksComponent } from "App/FormSteps/FormStepThanks/FormStepThanks";
import { NavigationComponent } from "App/FormSteps/Navigation/Navigation";
import { LabelComponent } from "App/FormFields/Label/Label";
import { TextFieldComponent } from "App/FormFields/TextField/TextField";
import { TextAreaComponent } from "App/FormFields/TextArea/TextArea";

export class ComponentRegistration {
    
    static registerComponents = () => {

        //MainForm, contains all other components, either directly or as nested components.
        ko.components.register("indi-main-form", new MainFormComponent());

        //FormSteps
        ko.components.register("indi-formstep-selectproducts", new FormStepSelectProductsComponent());
        ko.components.register("indi-formstep-personaldetails", new FormStepPersonalDetailsComponent());
        ko.components.register("indi-formstep-check", new FormStepCheckComponent());
        ko.components.register("indi-formstep-thanks", new FormStepThanksComponent());

        // FormStep Navigation
        ko.components.register("indi-navigation", new NavigationComponent());

        //Components
        ko.components.register("indi-product-list", new ProductListComponent());
        ko.components.register("indi-shopping-bag", new ShoppingBagComponent());
        ko.components.register("indi-discount", new DiscountComponent());

        //FormFields
        ko.components.register("indi-label", new LabelComponent());
        ko.components.register("indi-textfield", new TextFieldComponent());
        ko.components.register("indi-textarea", new TextAreaComponent());

    }

}