$(document).ready(function() {
    var $btnTriggerModal = $("#triggerModal");
    $btnTriggerModal.on("click", function () {
        $('#modalBuscarCuenta').modal('show');
        $("tr").find(".material-icons").hover(function() {
            $(this).addClass("text-info")
                    .css("cursor", "pointer");
        }, function() {
            $(this).removeClass("text-info")
                    .css("cursor", "initial");
        }).on("click", function() {
            GenerarReporte();
            $('#modalBuscarCuenta').modal('hide');
        });
    });
    listarCuentas();
    $(".buttons-html5").addClass("btn btn-primary");
    $(".buttons-print").addClass("btn btn-primary");
    $(".buttons-copy span:first").text("Copiar");
    $(".buttons-print span:first").text("Imprimir");
});

    //Validaciones
    var formulario = $("#Formulario");
    $(formulario).validate({
        rules: {
            txtCuentaName: {
                integer: true,
                required: true,
                number: true,
                maxlength: 10
            }
        },
        messages: {
            txtCuentaName: {
                integer: "Sólo números enteros",
                required: "Este campo es obligatorio",
                number: "Sólo se adminten números",
                maxlength: "El número máximo de carácteres es 10"
            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("text-danger").removeClass("text-sucess");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("text-sucess").removeClass("text-danger");
        }
    });

    var $idMesProceso = 12;
    function GenerarReporte() {
        listarReporte($("#txtCuenta").val(), $idMesProceso);
        $(".buttons-html5").addClass("btn blue lighten-1");
        $(".buttons-print").addClass("btn blue lighten-1");
        $(".buttons-copy span:first").text("Copiar");
        $(".buttons-print span:first").text("Imprimir");
        console.log($("#txtCuenta").val(), $idMesProceso);
    }
    var listarCuentas = function() {
        var tblCuentas = $('#tablaCuentas').DataTable( {
            "ajax":"../js/data/listaCuentas.json",
            "columns": [
                { "data": "ccod_cue" },
                { "data": "cdsc" },
                { "defaultContent": "<i class='material-icons'>check_circle</i>"}
            ],
            "language": idioma,
            responsive: true
        } );
        GetIdCuenta("#tablaCuentas", tblCuentas);
    }

    var GetIdCuenta = function(tbody, table) {
        $(tbody).on("click", "i.material-icons", function() {
            var data = table.row($(this).parents("tr")).data();
            var idCuenta = $("#txtCuenta").val(data.ccod_cue.trim());
        });
    }
    var idioma = {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    }
    function CambiarValorMes(){
        var select = document.getElementById("optMes");
        var options=document.getElementsByTagName("option");
        $idMesProceso = select.value;
    }
    $("#optMes").on("change", function() {
        CambiarValorMes();
    });

    $("#btnPruebas").on("click", function() {
        GenerarReporte();
    });
    var idEmpresa = "01";
    var idAnio = "2016";
    var idCliente = "jricra@contasis.net";
    var listarReporte = function(idCuenta, idMesProceso) {
        var tblReportes = $('#tablaReporte').DataTable( {
            "destroy":true,
            "ajax":"../js/data/" + idCliente + "/" + "rptCntsPndts/"+ idEmpresa + "/" + idAnio + "/" +  idCuenta +"ReporteCP" + idMesProceso  + ".json",
            "columns": [
                { "data": "ccod_cli" },
                { "data": "sum_ndebe" },
                { "data": "sum_nhaber" },
                { "data": "total" },
                { "data": "crazon" }
            ],
            "language": idioma,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excelHtml5', 'pdf', 'print'
            ],
            "order": [[ 3, "desc" ]]
        } );
    }