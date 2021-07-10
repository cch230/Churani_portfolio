var ctx = document.getElementById('myChart').getContext('2d');
// Global Options:
Chart.defaults.global.defaultFontColor = '#fff';
Chart.defaults.global.defaultFontSize =10;

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Coding', 'Travel', 'Music', 'Movie'],
        datasets: [{
            data: [70, 15, 10, 5],
            backgroundColor: ['#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#f4f4f4'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: false,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: true
        },
        plugins: {
            datalabels: {
                align: 'start',
                anchor: 'end',
                color: '#404040',
                textAlign: 'center',
                backgroundColor: '',
                borderColor: 'white',
                opacity:1,
                borderRadius: 10,
                borderWidth:0,
                font: {
                    size: 15,
                    weight: 600,
                    backgroundColor:'#ddd',
                    lineHeight: 1
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});


var ctx = document.getElementById('bar-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JAVA/KOTLIN', 'SQL/DB', 'JS/CSS', 'PYTHON'],
        datasets: [{
            data: [90, 80, 70, 70,0],
            backgroundColor: ['#f38181', '#fce38a', '#eaffd0', '#95e1d3'],
            borderWidth: 0.5 ,
            borderColor: '#fff'
        }]
    },
    options: {
        scaleBeginAtZero : true,
        title: {
            display: false,
            text: 'Bar chart',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: false,
            position: 'top',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled:true
        },
        plugins: {
            datalabels: {
                align: 'start',
                anchor: 'end',
                color: '#404040',
                textAlign: 'center',
                backgroundColor: '',
                borderColor: 'white',
                opacity:1,
                borderRadius: 10,
                borderWidth: 0,
                font: {
                    size: 15,
                    weight: 600,
                    backgroundColor:'#ddd',
                    lineHeight: 1
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});


// radar
var ctx = document.getElementById('radar-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['근면성실', '친화력', '감정기복', '패션감각','도전'],
        datasets: [{
            data: [90, 80, 0, 70,90],
            backgroundColor: ['#orange', '#00e676', '#ff5722', '#1e88e5'],
            borderWidth: 3 ,
            borderColor: '#fff'
        }]
    },
    options: {
        scaleBeginAtZero : true,
        title: {
            display: false,
            text: 'Bar chart',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: false,
            position: 'top',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: true
        },
        plugins: {
            datalabels: {
                align: 'start',
                anchor: 'end',
            color: '#404040',
                textAlign: 'center',
                backgroundColor: '#fff',
                borderColor: 'white',
                opacity:1,
                borderRadius: 10,
                borderWidth: 0,
                font: {
                    size: 15,
                    weight: 600,
                    backgroundColor:'blue',
                    lineHeight: 1
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});

