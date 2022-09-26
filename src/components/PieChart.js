import Chart from "react-apexcharts";


export default function PieChart(params) {
    

    const series = [143, 68, 40, 12]
    const options = {
        chart: {
            offsetX: 0,
            offsetY: 0,
            stacked: true,
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
              tools: {
                download: false,
              },
            },
            redrawOnWindowResize: true
        },
        dataLabels: {
            enabled: false,
        },
        color: ["#4318FF"], 
        labels: ['Present', 'Leave', 'Absent', 'Sick'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
            show: false,
        },
        grid: {
          borderColor: "#fff",
          clipMarkers: false,
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
           left: 0,
           right: 0,
           top: 0,
           bottom: 0
          }
      },
    }

    return (
        <Chart type="pie" series={series} options={options} height={210} width="70%"/>
    )
}