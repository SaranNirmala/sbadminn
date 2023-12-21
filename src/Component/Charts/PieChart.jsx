/* eslint-disable no-unused-vars */
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
innerRadius:90,
  outerRadius: 10,
  plugins: {
    legend: {
      position: "bottom",
      display: true,
    },
  },
};

export const data = {
  labels: ["Direct", "Referral", "Social"],
  datasets: [
    {
      label: "# of Votes",
      data: [15, 8, 4],
      backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
      borderWidth: 1,
      display: "block", 
      width: '10px',
      height: '20px',
      
    },
  ],
};

export default function PieChart() {
  return <Doughnut options={options} data={data} />;
}
