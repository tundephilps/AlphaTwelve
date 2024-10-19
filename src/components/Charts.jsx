import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 680 },
  { month: "Feb", value: 960 },
  { month: "Mar", value: 800 },
  { month: "Apr", value: 440 },
  { month: "May", value: 1000 },
  { month: "Jun", value: 580 },
  { month: "Jul", value: 890 },
  { month: "Aug", value: 370 },
  { month: "Sep", value: 880 },
  { month: "Oct", value: 690 },
  { month: "Nov", value: 980 },
  { month: "Dec", value: 610 },
];

const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" fontSize={12}>
        {payload.value}
      </text>
    </g>
  );
};

const MonthlyDataChart = () => {
  return (
    <ResponsiveContainer width="100%" height={320} className="border">
      <BarChart
        data={data}
        margin={{ top: 40, right: 30, left: 20, bottom: 8 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          ticks={[0, 200, 400, 600, 800, 1000]}
          domain={[0, 1000]}
          tick={<CustomYAxisTick />}
        />
        <Tooltip />
        <Bar dataKey="value" fill="#8576ff" radius={[1, 1, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthlyDataChart;
