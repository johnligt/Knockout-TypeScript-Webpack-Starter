import ko = require('knockout');

export class NoHtmlValidationRule {

    static init() {

        ko.validation.rules['nohtml'] = {
            validator: (value, arg) => {
                if (!arg || value == null) {
                    return true;
                }

                if (value.length === 0) {
                    return true;
                }

                let htmlregexp = new RegExp("^[A-Za-zÀ-ž0-9 _@\\-\\.\\,'`!@#$%^&*()_+?\n]*$", "");

                if (!(htmlregexp.test(value))) {
                    return false;
                }

                return true;
            },
            message: "Invalid data"
        };

        ko.validation.registerExtenders();
    }
}
