import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import { FaMoneyBillWave, FaWallet } from "react-icons/fa";
import { MdOutlineSavings } from "react-icons/md";

const Summary = () => {
  const { state } = useContext(ExpenseContext);

  const income = state.expense
    .filter((expense) => expense.type === "Income")
    .reduce((total, expense) => total + Number(expense.amount), 0);

  const totalexpense = state.expense
    .filter((expense) => expense.type === "Expense")
    .reduce((total, expense) => total + Number(expense.amount), 0);

  const balance = income - totalexpense;

  const cards = [
    {
      title: "Total Income",
      amount: income,
      icon: <FaMoneyBillWave />,
      style: "from-green-400 to-green-600",
    },
    {
      title: "Total Expenses",
      amount: totalexpense,
      icon: <FaMoneyBillWave />,
      style: "from-red-400 to-red-600",
    },
    {
      title: "Balance",
      amount: balance,
      icon: <FaWallet />,
      style: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${card.style}
          text-white rounded-2xl shadow-xl p-6
          transform transition duration-300
          hover:scale-105 hover:shadow-2xl`}
        >
          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-lg font-semibold opacity-90">
                {card.title}
              </h2>

              <p className="text-3xl font-bold mt-3">
                ₹ {card.amount.toLocaleString()}
              </p>
            </div>

            <div className="
              bg-white/20 
              p-4 
              rounded-full 
              text-4xl
              animate-pulse
            ">
              {card.icon}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Summary;