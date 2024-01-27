import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const StackColumnChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        { name: 'PRODUCT A', data: [44, 55, 41, 67, 22, 43] },
        { name: 'PRODUCT B', data: [13, 23, 20, 8, 13, 27] },
        { name: 'PRODUCT C', data: [11, 17, 15, 15, 21, 14] },
        { name: 'PRODUCT D', data: [21, 7, 25, 13, 22, 8] },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true },
      },
      // Other options...
    };

    const chartInstance = new ApexCharts(chartRef.current, options);
    chartInstance.render();

    return () => {
      chartInstance.destroy(); // Cleanup when component unmounts
    };
  }, []);

  return <div ref={chartRef} />;
};

export default StackColumnChart;
