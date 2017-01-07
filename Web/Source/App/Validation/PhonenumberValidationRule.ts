import ko = require('knockout');

export class PhonenumberValidationRule {

    static init() {

        ko.validation.rules['phone'] = {
            validator: (value, arg) => {
                if (!arg || value == null) {
                    return true;
                }

                if (value.length === 0) {
                    return true;
                }

                if (!value || value.length < 10) {
                    return false;
                }

                let isValid = (/(((?:0[1-9]{1}(?:\ |\-)\d{8})|(?:0[1-9]\d{1}(?:\ |\-)\d{7})|(?:0[1-9]\d{2}(?:\ |\-)\d{6})|(?:0[1-9]\d{8}))|((?:\+|00)(?:[0-9\-\(\)]{6,16}))|((?:\+|00|\(\+|\(0)(?:[0-9\-\)]{6,16})))$/.test(value));

                return isValid;
            },
            message: "Invalid telephone number"
        };

        ko.validation.registerExtenders();
    }
}
