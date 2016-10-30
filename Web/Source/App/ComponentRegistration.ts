import { MainFormComponent } from "App/Components/MainForm/MainForm";
import { ProductListComponent } from "App/Components/ProductList/ProductList"

export class ComponentRegistration {
    
    static registerComponents = () => {

        ko.components.register("st-main-form", new MainFormComponent());
        ko.components.register("st-product-list", new ProductListComponent());


    }

}