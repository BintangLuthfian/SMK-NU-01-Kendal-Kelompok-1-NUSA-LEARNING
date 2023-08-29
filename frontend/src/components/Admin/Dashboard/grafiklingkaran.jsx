import React, { useEffect, useRef } from "react";
import { Chart, initTE } from "tw-elements";

const Dnt = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    initTE({ Chart });

    // Chart data
    const dataDoughnut = {
      type: "doughnut",
      data: {
        labels: ["Pemula", "Pelajar", "Pro"],
        datasets: [
          {
            label: "Traffic",
            data: [2112, 2343, 2545],
            backgroundColor: ["#22c55e", "#facc15", "#dc2626"],
          },
        ],
      },
    };

    // Initialize chart
    if (chartRef.current) {
      new Chart(chartRef.current, dataDoughnut);
    }
  }, []);

  return (
    <div className=" w-96 ml-12 ">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Dnt;
