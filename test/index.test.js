var   { reverseNestedObj }      = require ('../helper/test.helper');


test ('Reverse nested object', () => {
        var inputValue = {
                hired: {
                        be: {
                                to: {
                                        deserve: 'I'
                                }
                        }
                }
        };

        var outputValue = {
                I: {
                        deserve: {
                                to: {
                                        be: 'hired'
                                }
                        }
                }
        };
        
        
        expect(reverseNestedObj (inputValue)).toEqual(outputValue);
});