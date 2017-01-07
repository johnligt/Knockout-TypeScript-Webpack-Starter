require(["jquery"]);
import es6promise = require("es6-promise");
import { Label } from "App/Models/Label";

export class LabelService {

    static labelList: Label[];
    private static labelServiceUrl = "/api/labels/";
    private static labelContainer: any;
    
    static getLabels(): any { 

        let promise = new es6promise.Promise((resolve, reject) => {

            let request = $.ajax({
                dataType: "json",
                url: LabelService.labelServiceUrl    
            });

            request.done((data) => {
                LabelService.labelList = <Label[]>data;
                LabelService.makeLabelContainer();
                
                console.log("Label list initialized");
                
            }).done(
            () => {
                resolve(request.responseJSON);
            });
            
            request.fail(
                (jqXhr, textStatus) => {
                    let message = "Request in LabelService failed: " + textStatus;
                    console.log(message);
                    reject(message);
                }
            );

        });

        console.log("Returning Labels promise");

        return promise;
    }



    static getLabel(labelKey: string): Label {
        let label = LabelService.labelContainer[labelKey];

        if (label === undefined) {
            console.warn(`Label for key '${labelKey}' was not found`);
            return new Label;
        } else {
            return label;
        }

    }


    private static makeLabelContainer(): any {

        let labelContainer = {};
        let labels = LabelService.labelList;

        let arrayLength = labels.length;

        for (var i = 0; i < arrayLength; i++) {
            labelContainer[labels[i].labelKey] = labels[i];
        }

        LabelService.labelContainer = labelContainer;
    }
}