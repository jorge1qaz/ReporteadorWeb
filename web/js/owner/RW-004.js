var $btnTriggerModal = $("#triggerModal");
$(function(){
    $btnTriggerModal.on("click", function () {
        $('.modal').modal();
        $('#modalBuscarCuenta').modal('open');

    });

    $('#example2').DataTable( {
        //"ajax": "datos.json",
        "ajax":"../js/data/listaCuentas.min.json",
        "columns": [
            { "data": "ccod_cue" },
            { "data": "cdsc" }
        ],
        "language": {
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
    } );
    $('#example').DataTable( {
        //"ajax": "datos.json",
        "ajax":"../js/data/reporteCuentaspendientes.min.json",
        "columns": [
            { "data": "ccod_cli" },
            { "data": "debe" },
            { "data": "haber" },
            { "data": "total" },
            { "data": "crazon" }
        ],
        "language": {
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
        },
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excelHtml5', 'pdf', 'print'
        ]
    } );

    $(".buttons-html5").addClass("btn blue lighten-1");
    $(".buttons-print").addClass("btn blue lighten-1");
    $(".buttons-copy span:first").text("Copiar");
    $(".buttons-print span:first").text("Imprimir");

});
