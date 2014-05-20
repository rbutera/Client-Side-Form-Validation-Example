// app.js
$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();

        var addError = function(element, formError) {
            if ($(element).parent('.form-group').hasClass('has-error') == false) {
                $(element).parent('.form-group').addClass('has-error has-feedback');
                $(element).after('<span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>');

                if (formError) {
                    $(element).next('span.glyphicon').after('<span class=\"help-block\">' + formError + '</span>');
                }
            }
        }

        var removeError = function(element) {
            $(element).next('span.glyphicon.form-control-feedback').remove();
            $(element).next('span.help-block').remove();
            $(element).parent('.form-group').removeClass('has-error has-feedback');
        }

        $('input.form-control').each(function() {
            var elementType = $(this).attr('type');
        });


        // check all fields filled in
        $('input').each(function() {
            var thisInput = $(this);
            var dataLength = thisInput.val().length;
            if (dataLength == 0) {
                addError(this, "should not be empty");
            } else if (dataLength > 0 && thisInput.parent().hasClass('has-error')) {
                removeError(this);
            }
        });

        // validate first name

        // validate last name

        // validate mobile no.

        // validate age
        var age = $('#userAge');
        var ageNum = parseInt(age.val());
        // number
        if (isNaN(parseInt(ageNum))) {
            addError(age, "should be a number");
        } else if (age.val().length > 0) {
            removeError(age);
        }

        // sanity
        if (ageNum >= 118) {
            addError(age, "are you really that old?");
        } else if (ageNum < 18) {
            addError(age, "you are too young to use this website.");
        } else if (age.val().length > 0) {
            removeError(age);
        }

        // validate postcode

        // jQuery
        event.preventDefault();

        // submission
    })
});