"use client";
import { Text, Theme } from "@radix-ui/themes";

import "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./styles.scss";

export default function GraphComponent(props: any) {
  const { X, Y, root } = props
  const [graph, setGraph] = useState([{ x: 0, y: 0 }])
  const [roots, setRoots] = useState([{ x: 0, y: 0 }])
  useEffect(() => {
    if (X) {
      let temp = [];
      for (const pos in X) {
        temp.push({ x: X[pos], y: Y[pos].toFixed(2) })
      }
      setGraph(temp);
    }
    if (root) {
      let temp = [];
      for (const item of root) {
        temp.push({ x: item[0], y: Number(item[1]) })
      }
      setRoots(temp);
    }

  }, [X])

  const data = {
    datasets: [
      {
        label: 'Linha',
        data: graph,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: 'transparent',
        tension: 0.2,
        pointRadius: 0,
        type: 'line',
      },
      {
        label: 'Raiz',
        data: roots,
        borderColor: 'red',
        backgroundColor: 'red',
        pointStyle: 'circle',
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        showLine: false,
        type: 'scatter',
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        min: Y.at(Y.length),
      },
    },
    maintainAspectRatio: false
  };

  return (
    <Theme>
      <div>
        <Text size={"5"} align="center" weight="bold" as="div">
          Gráfico & Raiz aproximada da função
        </Text>

        <div className="graph">
          <Line data={data} options={options} />

        </div>
      </div>
    </Theme>
  );
}
