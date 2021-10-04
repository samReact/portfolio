import Chart from 'chart.js/auto';
import { useEffect } from 'react';

const About = ({ theme }) => {
  useEffect(() => {
    var ctx = 'myChart';
    Chart.defaults.datasets.line.showLine = false;
    var myChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: [
          'javascript',
          'es6',
          'reactJS',
          'reactNative',
          'typescript',
          'expressJS',
          'postcss',
          'scrum',
        ],
        datasets: [
          {
            data: [8, 9, 9, 9, 7, 7, 7, 8],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          r: {
            ticks: {
              color: 'red',
              display: false,
            },
            grid: {
              color: 'red',
              display: false,
            },
          },
        },
      },
    });
    return () => myChart.destroy();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ width: 400 }}>
        <canvas id="myChart" />
      </div>
    </div>
  );
};

export default About;
