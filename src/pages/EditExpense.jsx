import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import { useNavigate, useParams } from "react-router-dom";

const EditExpense = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { state, updateExpense } = useContext(ExpenseContext);


  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    type: "Expense",
  });


  // Get selected expense data
  useEffect(() => {

    const selectedExpense = state.expense.find(
      (item) => String(item.id) === id
    );

    if (selectedExpense) {
      setFormData(selectedExpense);
    }

  }, [id, state.expense]);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    await updateExpense(id, formData);

    navigate("/");

  };


  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-8 mt-10">

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
  ✏️ Edit Expense
</h1>


      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
           className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />


        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
           className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />


        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
           className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >

          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Medical">Medical</option>

        </select>


        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
           className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />


        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
           className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >

          <option value="Income">Income</option>
          <option value="Expense">Expense</option>

        </select>


       <button
  type="submit"
  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
>
  Update Expense
</button>

      </form>

    </div>
  );
};

export default EditExpense;