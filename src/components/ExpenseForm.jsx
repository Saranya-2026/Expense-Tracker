import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ExpenseContext } from "../Context/ExpenseContext";

const ExpenseForm = () => {

  const { addExpense } = useContext(ExpenseContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    type: "Expense",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      toast.error("Please fill all fields");
      return;
    }

    await addExpense(formData);

    toast.success("Expense Added Successfully 🎉");

    navigate("/");
  };


  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Title
        </label>


        <input
          type="text"
          name="title"
          placeholder="Enter expense title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>


      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Amount
        </label>

        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>


      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option value="">Select Category</option>
          <option value="Food">🍔 Food</option>
          <option value="Travel">🚗 Travel</option>
          <option value="Shopping">🛒 Shopping</option>
          <option value="Medical">💊 Medical</option>
          <option value="Salary">💰 Salary</option>
          <option value="Others">📌 Others</option>

        </select>
      </div>


      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Date
        </label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

      </div>


      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Type
        </label>

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>

        </select>

      </div>


      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300"
      >
        Add Expense +
      </button>

    </form>
  );
};

export default ExpenseForm;