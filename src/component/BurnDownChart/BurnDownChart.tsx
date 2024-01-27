import React,{useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts';


const BurnDownChart = () =>{
  const BurnDownChartREf = useRef(null);
  useEffect(() =>{

    var options = {
      series: [{
      name: 'Sales',
      data: [54, 53, 50, 49, 39, 29, 22, 19, 12, 7, 6, 5]
    }],
      chart: {
      height: 350,
      type: 'line',
    },
    forecastDataPoints: {
      count: 7
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
      tickAmount: 10,
      labels: {
        formatter: function(value: any, timestamp: string | number | Date, opts: { dateFormatter: (arg0: Date, arg1: string) => any; }) {
          return opts.dateFormatter(new Date(timestamp), 'dd MMM')
        }
      }
    },
    title: {
      text: 'Forecast',
      align: 'left',
      style: {
        fontSize: "16px",
        color: '#666'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [ '#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
    },
    yaxis: {
      min: -10,
      max: 40
    }
    };
    const burnDownChart = new ApexCharts(BurnDownChartREf.current, options)

    burnDownChart.render();

    return()=>{
      burnDownChart.destroy();
    }
  },[])

  return (
    <div ref={BurnDownChartREf}/>      
  )
}

export default BurnDownChart
