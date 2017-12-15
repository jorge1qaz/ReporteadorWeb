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
    //$("#lstMes").val(mes).attr("selected");
    /*$("#btnGenerarReporte").on("click", function() {
        listarReporte($("#lstMes").val(), $("#lstTipoMoneda").val());
    });
    $("#monthHeader").text("");
    $("#monthtitle").text("");
*/
    var dataSet =  {"data":[{"C":"010010006","D":"OTROS INGRESOS DIVERSOS - HYO ","M":" ","U":41.0,"PV":4321.0294,"PC":0.0,"MUU":4321.0294,"MV":177162.2038,"MC":0.0,"MU":177162.2038},{"C":"010010007","D":"OTROS INGRESOS DIV. AYA ","M":" ","U":11.0,"PV":90.1588,"PC":0.0,"MUU":90.1588,"MV":991.7471,"MC":0.0,"MU":991.7471},{"C":"010010008","D":"OTROS INGRESOS DIV. V. PASCO ","M":" ","U":1.0,"PV":150.75,"PC":0.0,"MUU":150.75,"MV":150.75,"MC":0.0,"MU":150.75},{"C":"020010006","D":"DESCUENTOS OBTENIDOS - V.PASCO ","M":" ","U":1.0,"PV":202.0312,"PC":0.0,"MUU":202.0312,"MV":202.0312,"MC":0.0,"MU":202.0312},{"C":"1030-61460","D":"CARTUCHO DE FILTRO ","M":"UNIDAD ","U":1.0,"PV":104.3008,"PC":0.0,"MUU":104.3008,"MV":104.3008,"MC":0.0,"MU":104.3008},{"C":"1063726","D":"ESTRIBO ","M":"UNIDAD ","U":1.0,"PV":289.3681,"PC":231.41,"MUU":57.9581,"MV":289.3681,"MC":231.41,"MU":57.9581},{"C":"1068153","D":"ARBOL TRANSMISION ","M":"UNIDAD ","U":1.0,"PV":7326.4165,"PC":5790.0,"MUU":1536.4165,"MV":7326.4165,"MC":5790.0,"MU":1536.4165},{"C":"1068247","D":"CRUCETA ","M":"UNIDAD ","U":4.0,"PV":1019.8471,"PC":0.0,"MUU":1019.8471,"MV":4079.3883,"MC":0.0,"MU":4079.3883},{"C":"1068250","D":"JUEGO CRUCETA ","M":"UNIDAD ","U":2.0,"PV":1249.8692,"PC":570.47,"MUU":679.3992,"MV":2499.7385,"MC":1140.94,"MU":1358.7985},{"C":"1068253","D":"JUEGO CRUCETA ","M":"UNIDAD ","U":6.0,"PV":1506.4551,"PC":0.0,"MUU":1506.4551,"MV":9038.7304,"MC":0.0,"MU":9038.7304},{"C":"1069122","D":"LAMINILLA DE AJUSTE ","M":"UNIDAD ","U":1.0,"PV":74.2352,"PC":0.0,"MUU":74.2352,"MV":74.2352,"MC":0.0,"MU":74.2352},{"C":"1069254","D":"CONO SINCROND ","M":"UNIDAD ","U":30.0,"PV":184.8831,"PC":147.268,"MUU":37.6151,"MV":5546.4943,"MC":4418.040,"MU":1128.4543},{"C":"1069255","D":"CONO SINCRONIZA ","M":"UNIDAD ","U":15.0,"PV":378.7580,"PC":217.0507,"MUU":161.7073,"MV":5681.3694,"MC":3255.7600,"MU":2425.6094},{"C":"1069782","D":"TORNILLO TOPE ","M":"UNIDAD ","U":2.0,"PV":50.4992,"PC":0.0,"MUU":50.4992,"MV":100.9984,"MC":0.0,"MU":100.9984}]};
    
    var simboloMoneda = "S/ ";
    $('#tablaReporte').DataTable( {
        //"data": [{"C":"010010006","D":"OTROS INGRESOS DIVERSOS - HYO ","M":" ","U":41.0,"PV":4321.0294,"PC":0.0,"MUU":4321.0294,"MV":177162.2038,"MC":0.0,"MU":177162.2038},{"C":"010010007","D":"OTROS INGRESOS DIV. AYA ","M":" ","U":11.0,"PV":90.1588,"PC":0.0,"MUU":90.1588,"MV":991.7471,"MC":0.0,"MU":991.7471},{"C":"010010008","D":"OTROS INGRESOS DIV. V. PASCO ","M":" ","U":1.0,"PV":150.75,"PC":0.0,"MUU":150.75,"MV":150.75,"MC":0.0,"MU":150.75},{"C":"020010006","D":"DESCUENTOS OBTENIDOS - V.PASCO ","M":" ","U":1.0,"PV":202.0312,"PC":0.0,"MUU":202.0312,"MV":202.0312,"MC":0.0,"MU":202.0312},{"C":"1030-61460","D":"CARTUCHO DE FILTRO ","M":"UNIDAD ","U":1.0,"PV":104.3008,"PC":0.0,"MUU":104.3008,"MV":104.3008,"MC":0.0,"MU":104.3008},{"C":"1063726","D":"ESTRIBO ","M":"UNIDAD ","U":1.0,"PV":289.3681,"PC":231.41,"MUU":57.9581,"MV":289.3681,"MC":231.41,"MU":57.9581},{"C":"1068153","D":"ARBOL TRANSMISION ","M":"UNIDAD ","U":1.0,"PV":7326.4165,"PC":5790.0,"MUU":1536.4165,"MV":7326.4165,"MC":5790.0,"MU":1536.4165},{"C":"1068247","D":"CRUCETA ","M":"UNIDAD ","U":4.0,"PV":1019.8471,"PC":0.0,"MUU":1019.8471,"MV":4079.3883,"MC":0.0,"MU":4079.3883},{"C":"1068250","D":"JUEGO CRUCETA ","M":"UNIDAD ","U":2.0,"PV":1249.8692,"PC":570.47,"MUU":679.3992,"MV":2499.7385,"MC":1140.94,"MU":1358.7985},{"C":"1068253","D":"JUEGO CRUCETA ","M":"UNIDAD ","U":6.0,"PV":1506.4551,"PC":0.0,"MUU":1506.4551,"MV":9038.7304,"MC":0.0,"MU":9038.7304},{"C":"1069122","D":"LAMINILLA DE AJUSTE ","M":"UNIDAD ","U":1.0,"PV":74.2352,"PC":0.0,"MUU":74.2352,"MV":74.2352,"MC":0.0,"MU":74.2352},{"C":"1069254","D":"CONO SINCROND ","M":"UNIDAD ","U":30.0,"PV":184.8831,"PC":147.268,"MUU":37.6151,"MV":5546.4943,"MC":4418.040,"MU":1128.4543},{"C":"1069255","D":"CONO SINCRONIZA ","M":"UNIDAD ","U":15.0,"PV":378.7580,"PC":217.0507,"MUU":161.7073,"MV":5681.3694,"MC":3255.7600,"MU":2425.6094},{"C":"1069782","D":"TORNILLO TOPE ","M":"UNIDAD ","U":2.0,"PV":50.4992,"PC":0.0,"MUU":50.4992,"MV":100.9984,"MC":0.0,"MU":100.9984}],
        data: dataSet.data,
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
        ]
    });

});