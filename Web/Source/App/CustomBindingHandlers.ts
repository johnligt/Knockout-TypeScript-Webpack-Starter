import es6promise = require("es6-promise");

export class CustomBindingHandlers {

    static initialize() : any {

        let promise = new es6promise.Promise((resolve, reject) => {

            require(["jquery", "bootstrap"],
                ($) => {

                    ko.bindingHandlers.currency = {
                        update: (element, valueAccessor, allBindingsAccessor) => {
                            let value: number = parseFloat(ko.utils.unwrapObservable(valueAccessor()));
                            let precision = 2;
                            let formattedValue = value.toFixed(precision).replace(".", ",");

                            let returnValue: string = "&euro; " + formattedValue;

                            ko.bindingHandlers.html.update(element, () => returnValue);
                        }
                    };
                    
                    ko.bindingHandlers.tooltip = {
                        init: (element, valueAccessor) => {
                            let local = ko.utils.unwrapObservable(valueAccessor()),
                                options = {};

                            ko.utils.extend(options, ko.bindingHandlers.tooltip.options);
                            ko.utils.extend(options, local);

                            $(element).tooltip(options);

                            ko.utils.domNodeDisposal.addDisposeCallback(element,
                                () => {
                                    $(element).tooltip("destroy");
                                });

                        },
                        options: {
                            placement: "top",
                            trigger: "hover",
                            html: true
                        }
                    };

                    
                    resolve("Custom binding handlers loaded.");
                    console.log("Custom binding handlers loaded.");

                });
            
           
        });

        console.log("Returning Custom binding handlers promise");

        return promise;
    }
}