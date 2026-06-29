"use client";

import { SummaryContext } from "@/context/SummaryContext";
import { useContext } from "react";
import { Pie, PieChart, Tooltip, Legend } from "recharts";

const StatsPage = () => {
  const { summary, setSummary } = useContext(SummaryContext);

  // Count how many times each action appears in summary
  const callCount  = summary.filter((item) => item.action === "Call").length;
  const textCount  = summary.filter((item) => item.action === "Text").length;
  const videoCount = summary.filter((item) => item.action === "Video").length;

  const chartData = [
    { name: "Call",  value: callCount,  fill: "#0088FE" },
    { name: "Text",  value: textCount,  fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  // Only show slices that have at least 1 action (empty slices break the chart)
  ].filter((item) => item.value > 0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Time Line</h1>
      <button className="btn btn-ghost">Filter Time Line</button>

      {/* ── Pie Chart Summary ── */}
      {chartData.length > 0 && (
        <div className="flex flex-col items-center my-6">
          <h2 className="text-xl font-semibold mb-4">Action Summary</h2>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
          >
            <Pie
              data={chartData}
              innerRadius="60%"
              outerRadius="80%"
              cornerRadius="50%"
              paddingAngle={5}
              dataKey="value"
            />
            <Tooltip formatter={(value, name) => [`${value} times`, name]} />
            <Legend />
          </PieChart>

          {/* Action counts below chart */}
          <div className="flex gap-6 mt-2 text-sm text-gray-600">
            <span>📞 Call: <strong>{callCount}</strong></span>
            <span>💬 Text: <strong>{textCount}</strong></span>
            <span>🎥 Video: <strong>{videoCount}</strong></span>
          </div>
        </div>
      )}

      {/* ── Timeline List ── */}
      <div>
        {summary.map((item, index) => (
          <div key={index} className="border p-4 my-2 flex m-4 rounded-lg shadow-sm">
            {item.action === "Call" ? (
              <span role="img" aria-label="call" className="text-7xl">📞</span>
            ) : item.action === "Text" ? (
              <span role="img" aria-label="message" className="text-7xl">💬</span>
            ) : (
              <span role="img" aria-label="meeting" className="text-7xl">👥</span>
            )}
            <div className="flex flex-col pl-5">
              <p><strong>Friend:</strong> {item.friendName}</p>
              <p><strong>Action:</strong> {item.action}</p>
              <p><strong>Date:</strong> {item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;