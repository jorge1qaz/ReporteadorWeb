$(document).ready(function() {
    var formulario = $("#Formulario");
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
      });
    $(formulario).validate({
        rules: {
            txtEmail: {
                required: true,
                email: true,
                minlength: 10,
                maxlength: 100
            },
            txtConfirmarEmail: {
                required: true,
                email: true,
                minlength: 10,
                maxlength: 100,
                equalTo: "#txtEmail"
            },
            txtPassword: {
                required: true,
                minlength: 6
            },
            txtConfirmarPassword: {
                required: true,
                minlength: 6,
                equalTo: "#txtPassword"
            },
            txtNombre: {
                required: true,
                minlength: 10,
                maxlength: 100,
            },
            txtApellidos: {
                required: true,
                minlength: 10,
                maxlength: 100,
            },
            txtRUC: {
                required: true,
                minlength: 10,
                maxlength: 11,
            }
        },
        messages: {
            txtEmail: {
                required: "Este campo es obligatorio",
                email: "Ingrese un correo electrónico, valido.",
                minlength: "El número mínimo de carácteres es 10",
                maxlength: "El número máximo de carácteres es 100"
            },
            txtConfirmarEmail: {
                required: "Este campo es obligatorio",
                email: "Ingrese un correo electrónico, valido.",
                minlength: "El número mínimo de carácteres es 10",
                maxlength: "El número máximo de carácteres es 100",
                equalTo: "Este correo electrónico no coincide con el anterior"
            },
            txtPassword: {
                required: "Este campo es obligatorio",
                minlength: "El número mínimo de carácteres es 6"
            },
            txtConfirmarPassword: {
                required:"Este campo es obligatorio",
                minlength: 6,
                equalTo: "Esta contraseña no coincide con la anterior"
            },
            txtNombre: {
                required:"Este campo es obligatorio",
                minlength:"El número mínimo de carácteres es 2",
                maxlength:"El número máximo de carácteres es 50"
            },
            txtApellidos: {
                required:"Este campo es obligatorio",
                minlength:"El número mínimo de carácteres es 2",
                maxlength:"El número máximo de carácteres es 50"
            },
            txtRUC: {
                required:"Este campo es obligatorio",
                
                minlength:"El número mínimo de carácteres es 10",
                maxlength:"El número máximo de carácteres es 11"
            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `help-block` class to the error element
            error.addClass("text-muted text-danger");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents("input").addClass("text-danger").removeClass("text-sucess");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents("input").addClass("text-sucess").removeClass("text-danger");
        }
    });
});