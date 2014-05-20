$(document).ready(function() {
    $('#daForm').bootstrapValidator({
        message: 'This value is not valid',
        live: 'enabled',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
                enabled: true,
                validators: {
                    notEmpty: {
                        message: 'should not be empty'
                    },
                    stringLength: {
                        min: 2,
                        max: 24,
                        message: 'must be between 2 and 24 characters'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: "characters must be alphabetical and/or spaces"
                    }
                }
            },
            lastName: {
                enabled: true,
                validators: {
                    notEmpty: {
                        message: 'should not be empty'
                    },
                    stringLength: {
                        min: 2,
                        max: 24,
                        message: 'must be between 2 and 24 characters'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: "characters must be alphabetical and/or spaces"
                    }
                }
            },
            age: {
                enabled: true,
                validators: {
                    notEmpty: {
                        message: 'should not be empty'
                    },
                    integer: {
                        message: 'should be a number'
                    },
                    between: {
                        min: 13,
                        max: 100,
                        message: 'age must be between 13 and 100'
                    }

                }
            },
            phone: {
                enabled: true,
                validators: {
                    notEmpty: {
                        message: 'should not be empty'
                    },
                    digits: {
                        message: 'must contain digits'
                    },
                    regexp: {
                        regexp: /^(01|02|03|05|070|071|072|073|074|075|07624|077|078|079)[0-9]+$/,
                        message: 'not a valid phone number'
                    }
                }
            },
            postcode: {
                enabled: true,
                validators: {
                    notEmpty: {
                        message: 'should not be empty'
                    },
                    zipCode: {
                        country: 'GB',
                        message: 'The value is not a valid UK postcode'
                    }
                }
            }
        }
    });
});