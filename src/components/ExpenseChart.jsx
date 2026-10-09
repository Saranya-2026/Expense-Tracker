import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const ExpenseChart = () => {
  const { state } = useContext(ExpenseContext);

  const income = state.expense
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const expense = state.expense
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const COLORS = ["#22c55e", "#ef4444"];
  console.log(state.expense);
console.log(data);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
  <h2 className="text-2xl font-bold text-center mb-6">
    📊 Income vs Expense
  </h2>

  <div className="flex justify-center items-center">
    <PieChart width={400} height={320}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={110}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  </div>
</div>
 
  );
};

export default ExpenseChart;