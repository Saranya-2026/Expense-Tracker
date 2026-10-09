import ExpenseForm from "../components/ExpenseForm";

const AddExpense = () => {
  return (
    <div 
      className="
      min-h-screen 
      bg-gradient-to-br 
      from-blue-100 
      via-purple-100 
      to-pink-100 
      p-8
      "
    >

      <div className="max-w-3xl mx-auto">

        <div
          className="
          bg-white/90
          backdrop-blur-lg
          rounded-3xl
          shadow-2xl
          p-8
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-purple-300
          animate-[fadeIn_0.8s_ease-in-out]
          "
        >

          <h1
            className="
            text-4xl
            font-bold
            text-blue-600
            text-center
            mb-6
            transition
            duration-300
            hover:scale-105
            "
          >
            Add New Expense 
            <span className="inline-block animate-bounce ml-2">
              💰
            </span>
          </h1>


          <p
            className="
            text-center
            text-gray-500
            mb-8
            text-lg
            "
          >
            Track your spending and manage your money easily
          </p>


          <ExpenseForm />


        </div>

      </div>

    </div>
  );
};

export default AddExpense;