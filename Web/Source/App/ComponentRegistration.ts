import { MainFormComponent } from "App/Components/MainForm/MainForm";

export class ComponentRegistration {
    
    static registerComponents = () => {

        ko.components.register("st-main-form", new MainFormComponent());


    }

}