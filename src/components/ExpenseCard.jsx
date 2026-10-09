import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

const ExpenseCard = ({ expense }) => {
  const navigate = useNavigate();
  const { deleteExpense } = useContext(ExpenseContext);

  return (
    <div
      className={`group bg-white rounded-3xl p-6 shadow-lg
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
      border-l-8 ${
        expense.type === "Income"
          ? "border-green-500"
          : "border-red-500"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {expense.title}
          </h2>

          <p className="text-gray-500 mt-3">📁 {expense.category}</p>

          <p className="text-gray-400">📅 {expense.date}</p>

          <span
            className={`inline-block mt-4 px-4 py-1 rounded-full text-sm font-semibold
            ${
              expense.type === "Income"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {expense.type}
          </span>
        </div>

        <div className="text-right">
          <h1 className="text-4xl font-extrabold text-blue-600">
            ₹ {expense.amount}
          </h1>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => navigate(`/edit/${expense.id}`)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition"
            >
              ✏️ Edit
            </button>

            <button
              onClick={() => deleteExpense(expense.id)}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition"
            >
              🗑 Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;