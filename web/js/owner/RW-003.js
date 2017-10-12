google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
    var data = google.visualization.arrayToDataTable([
        ['Mes', 'Acumulado'],
        ['Enero,', 817500],
        ['Febrero,', 379200],
        ['Marzo,', 2695000],
        ['Abril,', 2099000],
        ['Mayo,', 1526000],
        ['Junio,', 1526000],
        ['Julio,', 817500],
        ['Agosto,', 1645000],
        ['Septiembre,', 1526000],
        ['Octubre,', 485000],
        ['Noviembre,', 1526000],
        ['Diciembre,', 817500]
    ]);

    var options = {
        title: 'Resultado anual de la empresa XXXXXXXX',
        chartArea: { width: '50%' },
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
}