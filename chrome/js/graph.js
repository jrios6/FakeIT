window.onload = function() {
    var ctx = document.getElementById("weekChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: '# correctly answered',
                data: [4, 3, 2, 5, 1, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(6, 131, 151, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(6, 131, 151, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var monthctx = document.getElementById("monthChart").getContext('2d');
    var myChart2 = new Chart(monthctx, {
        type: 'line',
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
            datasets: [{
                label: 'Your Performance',
                data: [0.12, 0.33, 0.44, 0.55, 0.76, 0.62, 0.93],
                backgroundColor: 'rgba(23, 245, 238, 0.2)',
                borderColor: 'rgba(23, 245, 238, 1)',
                borderWidth: 1,
            }, {
                label: "Global Average",
                data: [0.58, 0.49, 0.35, 0.64, 0.73, 0.42, 0.61],
                backgroundColor: 'rgba(245, 23, 221, 0.2)',
                borderColor: 'rgba(245, 23, 221, 1)',
                borderWidth: 1,
            }
        ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var categoryctx = document.getElementById("categoriesChart").getContext('2d');
    var myChart3 = new Chart(categoryctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Impersonation", "Emotion", "Polarization", "Conspiracy", "Discredit", "Trolling"],
            datasets: [{
                label: 'Performance by Category',
                data: [25, 20, 13, 20, 18, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(6, 131, 151, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(6, 131, 151, 1)'
                ],
                borderWidth: 1,
            }
        ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
