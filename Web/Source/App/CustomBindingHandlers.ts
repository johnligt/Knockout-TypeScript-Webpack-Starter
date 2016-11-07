import ko = require("knockout");

require(["jquery", "bootstrap", "moment", "jquery-ui.datepicker"], ($, bootstrap, moment) => {

    $(document).ready(() => {

        ko.bindingHandlers.currency = {
            update: (element, valueAccessor, allBindingsAccessor) => {
                let value = ko.utils.unwrapObservable(valueAccessor());
                let precision = 2;                    
                let formattedValue = value.toFixed(precision).replace(".",",");
                
                let returnValue: string = "&euro; " + formattedValue;

                ko.bindingHandlers.html.update(element, () => returnValue);
            }
        };


        ko.bindingHandlers.percentage = {
            update: (element, valueAccessor, allBindingsAccessor) => {
                let value = ko.utils.unwrapObservable(valueAccessor());

                let calculatedValue = value * 100;

                let precision = 0;
                let formattedValue = calculatedValue.toFixed(precision);

                let returnValue: string = formattedValue + " %";

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

                ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
                    $(element).tooltip("destroy");
                });
                
            },
            options: {
                placement: "top",
                trigger: "hover",
                html: true
            }
        };

    
        ko.bindingHandlers.dateString = {
            update: (element, valueAccessor, allBindingsAccessor, viewModel) => {
                let value = valueAccessor(),
                    allBindings = allBindingsAccessor();
                let valueUnwrapped = ko.utils.unwrapObservable(value);
                let pattern = allBindings.datePattern || "DD-MM-YYYY";
                if (valueUnwrapped == undefined) {
                    $(element).text("");
                }
                else if ($.isFunction(moment)) {
                    var date = moment(valueUnwrapped); //new Date(Date.fromISO(valueUnwrapped));
                    $(element).text(moment(date).format(pattern));
                }
            }
        }
        
        ko.bindingHandlers.datepicker = {
            init: (element, valueAccessor, allBindingsAccessor) => {
                //initialize datepicker with some optional options
                var options = allBindingsAccessor().datepickerOptions || {};

                options["onChangeMonthYear"] = (y, m, instance) => {
                    instance.currentYear = y;
                    instance.currentMonth = m - 1;
                    $(element).datepicker("setDate", new Date(y, m - 1, instance.selectedDay));
                    var observable = valueAccessor();
                    observable($(element).datepicker("getDate"));
                }

                $(element).datepicker(options);

                //handle the field changing
                ko.utils.registerEventHandler(element, "change", () => {
                    var observable = valueAccessor();
                    observable($(element).datepicker("getDate"));
                });

                //handle disposal (if KO removes by the template binding)
                ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
                    $(element).datepicker("destroy");
                });

            },
            //update the control when the view model changes
            update: (element, valueAccessor, viewModel) => {
                var value = ko.utils.unwrapObservable(valueAccessor());

                if (value != null) {
                    $(element).datepicker("setDate", value);
                }
            }
        };

        ko.bindingHandlers.modal = {
            init: (element, valueAccessor) => {
                $(element).modal({
                    show: false
                });

                var value = valueAccessor();

                if (ko.isObservable(value)) {
                    $(element).on("hide.bs.modal", () => {
                        value(false);
                    });

                    $(element).on("show.bs.modal", () => {
                        value(true);
                    });
                }
                
            },
            update: (element, valueAccessor) => {
                var value = valueAccessor();
                if (ko.utils.unwrapObservable(value)) {
                    $(element).modal("show");
                } else {
                    $(element).modal("hide");
                }
            }
        }

      
    });
});