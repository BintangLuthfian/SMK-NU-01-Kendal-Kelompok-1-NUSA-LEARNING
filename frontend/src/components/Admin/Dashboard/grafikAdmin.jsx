import React, { useEffect } from "react";
import { Chart, initTE } from "tw-elements";

initTE({ Chart });

const Tc = () => {
  useEffect(() => {
    // Chart data
    const dataLine = {
      type: "line",
      data: {
        labels: [
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
          "Minggu",
        ],
        datasets: [
          {
            label: "Kategori 1",
            data: [2, 4, 6, 8, 6, 4, 2],
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.1)",
          },
          {
            label: "Kategori 2",
            data: [5, 5, 0, 2, 7, 8, 4],
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.1)",
          },
          {
            label: "Kategori 3",
            data: [8, 5, 2, 6, 2, 5, 8],
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
          },
        ],
      },
    };

    // Create and render the chart
    new Chart(document.getElementById("line-chart"), dataLine);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-4 my-9">
      <canvas id="line-chart" />
    </div>
  );
};

export default Tc;
