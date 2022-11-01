import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        '#407ef9',
        '#ff6370',
        '#a162f7',
      ],
      borderColor: [
        '#407ef9',
        '#ff6370',
        '#a162f7',
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
    responsive: true,
    plugins: {
      legend: false,
    }
  };
export function DoughnutX() {
  return <Doughnut data={data} options={options} />;
}
