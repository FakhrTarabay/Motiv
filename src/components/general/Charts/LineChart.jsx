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

const LineChart = ({bgColor,bColor}) => {
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
        lineTension: 0.4,
        fill: true,
        label: "Dataset 1",
        data: [134, 173, 112, 190, 134, 219, 163],
        borderColor: bColor,
        backgroundColor: bgColor,
      },
    ],
  };

  return <Line options={options} data={data} />;
};
export default LineChart;
