$(document).ready(function() {
    var idioma = {
        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfo": "Mostrando _START_ al _END_ de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando _START_ al _END_ de _TOTAL_ registros",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Filtrar por:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        buttons: {
            copyTitle: 'Los datos fueron copiados',
            copyInfo: {
                _: 'Copiados %d filas al portapapeles',
                1: 'Copiado 1 fila al portapapeles',
            }
        }
    }
    var listarReporte = function () {
        var tblReportes = $('#tableReport').DataTable({
            "destroy": true,
            "processing": true,
            "ordering": false,
            "scrollX": false,
            paging: false,
            "language": idioma,
            //dom: 'Bfrtip',
            info: false,
            buttons: [
                'copy', {
                    extend: 'excel',
                    text: 'Excel',
                    title: 'Estados ',
                    filename: 'Estados',
                }, {
                    extend: 'pdf',
                    text: 'PDF',
                    orientation: 'landscape',
                    title: 'Estados ',
                    filename: 'Estados',
                }, {
                    extend: 'print',
                    text: 'Imprimir',
                    title: 'Estados ',
                    exportOptions: {
                        modifier: {
                            page: 'current'
                        }
                    },
                }
            ]
        });
        $(".buttons-html5").addClass("btn btn-primary");
        $(".buttons-print").addClass("btn btn-primary").css("margin-top", "5px");
        $(".btn-primary").addClass("btn btn-primary").css("margin-top", "5px");
        $("input[type='search']").css("margin-top", "5px");
        $(".buttons-copy span:first").text("Copiar");
    }
    listarReporte();
});
