import { MainFormComponent } from "App/Components/MainForm/MainForm";
import { ProductListComponent } from "App/Components/ProductList/ProductList";
import { FormStepSelectProductsComponent } from "App/FormSteps/FormStepSelectProducts/FormStepSelectProducts";

export class ComponentRegistration {
    
    static registerComponents = () => {

        //FormSteps
        ko.components.register("st-formstep-selectproducts", new FormStepSelectProductsComponent());



        //Components
        ko.components.register("st-main-form", new MainFormComponent());
        ko.components.register("st-product-list", new ProductListComponent());


    }

}