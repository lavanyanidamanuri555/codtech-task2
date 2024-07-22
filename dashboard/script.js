document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/') {
        updateKPIs();
        initializeCharts();
    }
});

const data = {
    totalSales: 50000,
    activeUsers: 1200,
    conversionRate: 5.2,
    salesData: [1200, 1500, 1800, 2000, 2300, 2500, 2700],
    userData: [500, 600, 700, 800, 900, 1000, 1100],
    revenueData: [30, 20, 50],
    trafficData: [300, 400, 500, 600, 700, 800, 900]
};

function updateKPIs() {
    document.getElementById('total-sales').textContent = `$${data.totalSales}`;
    document.getElementById('active-users').textContent = data.activeUsers;
    document.getElementById('conversion-rate').textContent = `${data.conversionRate}%`;
}

function initializeCharts() {
    const salesChartCtx = document.getElementById('sales-chart').getContext('2d');
    const userChartCtx = document.getElementById('user-chart').getContext('2d');
    const revenueChartCtx = document.getElementById('revenue-chart').getContext('2d');
    const trafficChartCtx = document.getElementById('traffic-chart').getContext('2d');

    new Chart(salesChartCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales Over Time',
                data: data.salesData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    new Chart(userChartCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'User Demographics',
                data: data.userData,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    new Chart(revenueChartCtx, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C'],
            datasets: [{
                label: 'Revenue Distribution',
                data: data.revenueData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    new Chart(trafficChartCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Website Traffic',
                data: data.trafficData,
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}