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

const LineChart = ({ bgColor, bColor, dataX }) => {
  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 3,
      },
    },
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
        lineTension: 0.3,
        fill: true,
        data: dataX,
        borderColor: bColor,
        backgroundColor: bgColor,
      },
    ],
  };

  return <Line options={options} data={data} />;
};
export default LineChart;
