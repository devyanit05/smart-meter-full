import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import "../app.css";

Chart.register(CategoryScale);

const Voltage = () => {
  const labels = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
  ];

  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Hourly Voltage Usage",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          220, 213, 218, 223, 230, 228, 222, 231, 234, 212, 220, 213, 218, 223,
          230, 228, 222, 231, 234, 212, 220, 213, 218, 223, 230, 228, 222, 231,
          234, 212, 220, 213, 218, 223, 230, 228, 222, 231, 234, 212, 220, 213,
          218, 223, 230, 228, 222, 231, 234, 212, 220, 213, 218, 223, 230, 228,
          222, 231, 234, 223,
        ],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos";
      const dataset = [];
      await fetch(url)
        .then((data) => {
          console.log("api data: ", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("api data: ", res);
          for (const val of res) {
            dataset.push(val.id);
          }
          setData({
            labels,
            datasets: [
              {
                label: "Hourly Voltage Usage",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: dataset,
              },
            ],
          });
          console.log("dataset", dataset);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Voltage</h2>
      <div>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Voltage;
