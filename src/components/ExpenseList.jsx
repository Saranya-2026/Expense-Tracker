import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import ExpenseCard from "../components/ExpenseCard";

const ExpenseList = ({ search,filter,category }) => {
  const { state } = useContext(ExpenseContext);
  const expense=state.expense||[]
  const filteredExpense = state.expense.filter((expense) => {
   const matchesSearch =
    expense.title.toLowerCase().includes(search.toLowerCase()) ||
    expense.category.toLowerCase().includes(search.toLowerCase());

  const matchesType =
    filter === "All" || expense.type === filter;
    return matchesSearch && matchesType;

 

});

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Recent Expenses
      </h2>

      {filteredExpense.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-600">
            📂 No Expenses Found
          </h3>

          <p className="text-gray-400 mt-2">
            Click <b>Add Expense</b> to add your first expense.
          </p>
        </div>
      ) : (
        filteredExpense.map((expense) => (
          <ExpenseCard
            key={expense.id}
            expense={expense}
          />
        ))
      )}
    </div>
  );
};

export default ExpenseList;