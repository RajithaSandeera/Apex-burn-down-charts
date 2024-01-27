import React,{useEffect, useRef} from 'react'
import ApexCharts from 'apexcharts';

const PieChart = () => {
  const chartRef = useRef(null);
  
      useEffect(() =>{
        var options = {
          series: [44, 55, 13, 33],
          chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
        };

        const pieChartInstance  = new ApexCharts(chartRef.current, options);
        pieChartInstance.render();

        return() => {
          pieChartInstance.destroy();
        }
        
      },[])
  return (
    <div ref={chartRef}/>  
  )
}

export default PieChart
