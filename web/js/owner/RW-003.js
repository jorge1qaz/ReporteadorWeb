/*google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
    var data = google.visualization.arrayToDataTable([
        ['Mes', 'Acumulado'],
        ['Enero', 817500],
        ['Febrero', 379200],
        ['Marzo', 2695000],
        ['Abril', 2099000],
        ['Mayo', 1526000],
        ['Junio', 1526000],
        /*['Julio', 817500],
        ['Agosto', 1645000],
        ['Septiembre', 1526000],
        ['Octubre', 485000],
        ['Noviembre', 1526000],
        ['Diciembre', 817500]
    ]);

    var options = {
        title: 'Resultado anual de la empresa XXXXXXXX',
        chartArea:
        {
            width: '60%'
        },
        isStacked: true,

        hAxis: {
            title: 'Total',
            minValue: 0,
        },
        vAxis: {
            title: 'Meses'
        }

    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    $(window).resize(function () {
        if ($(window).width() < 481) //Celulares
            $("#chart_div").hide();
        else
            if ($(window).width() < 769) //Tabletas    
                $("#chart_div").show();
            else // Pcs o laptops.
                $("#chart_div").show();
    });
}*/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Mes', 'Acumulado'],
        ['Enero', 817500],
        ['Febrero', 379200],
        ['Marzo', 2695000],
        ['Abril', 2099000],
        ['Mayo', 1526000],
        ['Junio', 1526000]
        /*['Julio', 817500],
        ['Agosto', 1645000],
        ['Septiembre', 1526000],
        ['Octubre', 485000],
        ['Noviembre', 1526000],
        ['Diciembre', 817500]*/
    ]);
    var options = {
        title: 'Gráfico ',
        hAxis: { title: 'Meses', titleTextStyle: { color: '#333' } },
        chartArea:
        {
            width: '70%'
        },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Mes', 'Total'],
        ['Enero', 817500],
        ['Febrero', 379200],
        ['Marzo', 2695000],
        ['Abril', 2099000],
        ['Mayo', 1526000],
        ['Junio', 1526000],
        ['Julio', 817500],
        ['Agosto', 1645000],
        ['Septiembre', 1526000],
        ['Octubre', 485000],
        ['Noviembre', 1526000],
        ['Diciembre', 817500]
    ]);

    var options = {
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['rgb(33, 142, 202)', '#1b9e77', '#7570b3'],
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" }
                     ]);

    var chart = new google.charts.Bar(document.getElementById('chart_div3'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}