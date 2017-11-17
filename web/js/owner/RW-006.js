var idEmpresa = "01";
var idAnio = "2016";
var idCliente = "jricra@contasis.net";
var fecha = new Date();
var anio = fecha.getFullYear();
var mes = fecha.getMonth() + 1;
var dia = fecha.getDate();
if(mes < 10) {
    mes = '0' + mes;
}
if(dia < 10) {
    dia = '0' + dia;
}
var fechaCompleto = anio + "." + mes + "." + dia;
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

$("#lstTipoMoneda").on("change", function () {
    listarReporte($("#lstMes").val(), $(this).val());
});
$("#lstMes").on("change", function () {
    var textoMes = $("#lstMes option:selected").text();
    $("#monthHeader").text(textoMes);
    listarReporte($(this).val(), $("#lstTipoMoneda").val() );
});

$(document).ready(function() {
    $("#lstMes").val(mes).attr("selected");
    $("#btnGenerarReporte").on("click", function() {
        listarReporte($("#lstMes").val(), $("#lstTipoMoneda").val());
    });
    $("#monthHeader").text("");
    $("#monthtitle").text("");
});
function CheckFile(urlFile) {
    $.UrlExists = function (url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status != 404;
    }
    if ($.UrlExists(urlFile)) {
        return true;
        console.log(urlFile);
    } else {
        return false;
        console.log(urlFile);
    }
    
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
    },
    buttons: {
        copyTitle: 'Los datos fueron copiados',
        copyInfo: {
            _: 'Copiados %d filas al portapapeles',
            1: 'Copiado 1 fila al portapapeles',
    }}
}
var listarReporte = function(mesProcesamiento, tipoMoneda) {
    var urlFileJson = "../js/data/" + idCliente + "/" + "rptsMrgTld/" + "Reporte" + tipoMoneda + mesProcesamiento + ".json";
    var simboloMoneda = "";
    if (CheckFile(urlFileJson)) {
        if (tipoMoneda == "Soles") {
            simboloMoneda = "S/ ";
        } else {
            simboloMoneda = "$ ";
        }
        var tblReportes = $('#tablaReporte').DataTable( {
            "destroy":true,
            "processing": true,
            responsive: true,
            "ajax":urlFileJson,
            "columns": [
                { "data": "C" },
                { "data": "D" },
                { "data": "M" },
                { "data": "U" },
                { 
                    "data": "PV",
                    "render": function(precioVenta) {
                        return simboloMoneda + precioVenta
                    }
                },
                { 
                    "data": "PC",
                    "render": function(precioCosto) {
                        return simboloMoneda + precioCosto
                    }
                },
                { "data": "MUU" },
                { "data": "PM" },
                { 
                    "data": "MV",
                    "render": function(montoVentas) {
                        return simboloMoneda + montoVentas
                    }
                },
                { 
                    "data": "MC",
                    "render": function(montoCosto) {
                        return simboloMoneda + montoCosto
                    }
                },
                { 
                    "data": "MU",
                    "render": function(margenUtil) {
                        return simboloMoneda + margenUtil
                    }
                }
            ],
            "language": idioma,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', {
                    extend: 'excel',
                    text: 'Excel',
                    title: 'Reporte: Margen de utilidad por producto - Para el mes de ' + meses[mesProcesamiento - 1],
                    filename: 'Margen de utilidad por producto ' + fechaCompleto,
                }, {
                    extend: 'pdf',
                    text: 'PDF',
                    orientation: 'landscape',
                    title: 'Reporte: Margen de utilidad por producto - Para el mes de ' + meses[mesProcesamiento - 1],
                    filename: 'Margen de utilidad por producto ' + fechaCompleto,
                }, {
                    extend: 'print',
                    text: 'Imprimir',
                    title: 'Reporte:  Margen de utilidad por producto',
                    exportOptions: {
                        modifier: {
                            page: 'current'
                        }
                    },
                }
            ],
            "order": [[ 3, "desc" ]]
        } );
        $(".buttons-html5").addClass("btn btn-primary");
        $(".buttons-print").addClass("btn btn-primary");
        $(".buttons-copy span:first").text("Copiar");
        $("#monthtitle").text(" para el mes de ");
    } else {
        alert("Ningún dato para éste filtro.");
        $("#monthtitle").text("");
        $("#monthHeader").text("");
    }
}