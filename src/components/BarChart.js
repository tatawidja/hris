import Chart from "react-apexcharts";


export function BarChart({ width = "100%", height = "100%"}) {

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
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        legend: {
            show: false,
        },
        plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 5
            },
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
        colors: ['#4318FF', '#FEBD38', '#6ABBFF', '#E9EDF7']
      }


    const series = [{
        name: 'Tax',
        data: [13, 15, 14, 17, 12, 13, 16, 14, 15, 19, 16, 23]
      }, {
        name: 'BPJS KS',
        data: [13, 13, 20, 18, 13, 17, 16, 14, 15, 19, 16, 23]
      }, {
        name: 'BPJS TK',
        data: [11, 17, 15, 15, 21, 14, 16, 14, 15, 19, 16, 13]
      }, {
        name: 'Take Home Pay',
        data: [120, 170, 178, 190, 172, 188, 186, 164, 195, 169, 176, 183]
      }]

    return <Chart 
    type="bar"
    options={options}
    series={series}
    width={width}
    height={height}
    />
}