import React, { Component } from 'react'
import Chart from "chart.js";

export class Doughnut extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        console.log("sukses", myChartRef)

        
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                labels: ["Baju", "Celana", "Celana Dalam", "Peci"],
                datasets: [
                    {
                        label: "",
                        data: [86, 67, 91, 20],
                        backgroundColor: ['#a8e0ff', 'blue', '#9a30cf', 'f5f5f5']
                    }
                ],
                
            },
            options: {
                legend: {
                    labels: {
                        fontColor: 'rgb(255, 99, 132)'
                    },
                    align: 'center',
                    position: 'right',
                    fontFamily: 'Helvetica'
                },
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}


export class Bar extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: ["Minggu 1", "Minggu 2", "Minggun 3", "Minggu 4"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91, 20],
                        fill: false,
                        backgroundColor: '#f5f5f5',
                        borderColor: '#9a30cf',
                        width: 120,
                        showLine: true
                    },
                    {
                        type: 'scatter', // 'line' dataset default does not affect this dataset since it's a 'scatter'
                        data: [1, 1]
                    }
                ],
            },
            options: {
                legend: {
                    display: false
                },
                layout: {
                    // padding: {
                    //     left: 10,
                    //     right: 150,
                    //     top: 20,
                    //     bottom: -10
                    // }
                },
                tooltips: {
                    mode: 'index',
                    axis: 'y'
                },
                elements: {
                    line: {
                        tension: 0 // disables bezier curves
                    }
                },
                showLines: true,
                hover: {
                    // Overrides the global setting
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        }   
                    }]
                }
            },
            style:{
                maintainAspectRatio: false,
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    height="100"
                    id="chartLine"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}