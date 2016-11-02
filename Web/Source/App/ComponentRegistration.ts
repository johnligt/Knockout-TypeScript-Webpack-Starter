import { MainFormComponent } from "App/MainForm/MainForm";
import { ProductListComponent } from "App/Components/ProductList/ProductList";
import { FormStepSelectProductsComponent } from "App/FormSteps/FormStepSelectProducts/FormStepSelectProducts";
import { FormStepPersonalDetailsComponent } from "App/FormSteps/FormStepPersonalDetails/FormStepPersonalDetails";
import { FormStepCheckComponent } from "App/FormSteps/FormStepCheck/FormStepCheck";
import { NavigationComponent } from "App/FormSteps/Navigation/Navigation";

export class ComponentRegistration {
    
    static registerComponents = () => {

        //FormSteps
        ko.components.register("st-formstep-selectproducts", new FormStepSelectProductsComponent());
        ko.components.register("st-formstep-personaldetails", new FormStepPersonalDetailsComponent());
        ko.components.register("st-formstep-check", new FormStepCheckComponent());

        // FormStep Navigation
        ko.components.register("st-navigation", new NavigationComponent());

        //Components
        ko.components.register("st-main-form", new MainFormComponent());
        ko.components.register("st-product-list", new ProductListComponent());


    }

}