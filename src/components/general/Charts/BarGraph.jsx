import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const BarGraph = () => {
  const labels = [
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [134, 173,112, 190, 134, 219, 163],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend:false,
    }
  };
  return <Bar data={data} options={options} width="200px"/>;
};

export default BarGraph;
