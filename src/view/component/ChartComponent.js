import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
// import PieChart from "./PieChart";
import BarChart from "./BarChart";

import Data from "../../utils/Data.js";

Chart.register(CategoryScale);
 
export default function ChartComponent() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2,
        barThickness: 50,
        borderRadius: 5
      }
    ]
  });
 
  return (
    <div className="ChartComponent">
      <p>Using Chart.js in React</p>
      <BarChart chartData={chartData} />
    </div>
  );
}