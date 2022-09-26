import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        lineTension: 0.6,
        fill: true,
        label: "Dataset 1",
        data: [134, 173, 112, 190, 134, 219, 163],
        borderColor: "rgba(255, 118, 76, 1)",
        backgroundColor: "rgba(255, 118, 76, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
export default LineChart;
