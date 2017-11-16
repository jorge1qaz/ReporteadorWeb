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

$(document).ready(function() {
    
    
    listarReporte();
});
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
var listarReporte = function() {
    var tblReportes = $('#tablaReporte').DataTable( {
        "destroy":true,
        "processing": true,
        responsive: true,
        "ajax":"../js/data/" + idCliente + "/" + "rptsMrgTld/" + "ReporteDolares1.json",
        "columns": [
            { "data": "C" },
            { "data": "D" },
            { "data": "M" },
            { "data": "U" },
            { 
                "data": "PV",
                "render": function(precioVenta) {
                    return "S/ " + precioVenta
                }
            },
            { 
                "data": "PC",
                "render": function(precioCosto) {
                    return "S/ " + precioCosto
                }
            },
            { "data": "MUU" },
            { "data": "PM" },
            { 
                "data": "MV",
                "render": function(montoVentas) {
                    return "S/ " + montoVentas
                }
            },
            { 
                "data": "MC",
                "render": function(montoCosto) {
                    return "S/ " + montoCosto
                }
            },
            { 
                "data": "MU",
                "render": function(margenUtil) {
                    return "S/ " + margenUtil
                }
            }
        ],
        "language": idioma,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excelHtml5', {
                extend: 'pdf',
                text: 'PDF',
                orientation: 'landscape',
                title: 'Reporte:  Margen de utilidad por producto - ' + fechaCompleto,
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
}