const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">
          About Expense Tracker
        </h1>

        <p className="text-gray-600 text-center text-lg mb-8">
          A simple and efficient expense management application that helps
          users track income and expenses, manage budgets, and understand
          spending habits.
        </p>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              📊 Track Expenses
            </h2>
            <p className="text-gray-600">
              Add, update, delete and view your daily expenses easily.
            </p>
          </div>


          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              💰 Manage Money
            </h2>
            <p className="text-gray-600">
              Monitor your income and spending patterns with better control.
            </p>
          </div>


          <div className="bg-purple-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              📈 Visual Reports
            </h2>
            <p className="text-gray-600">
              Analyze your expenses using charts and summaries.
            </p>
          </div>

        </div>


        <div className="mt-10 bg-gray-50 p-6 rounded-lg">

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">

            <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-cyan-500 text-white px-4 py-2 rounded-full">
              Tailwind CSS
            </span>

            <span className="bg-yellow-500 text-white px-4 py-2 rounded-full">
              JavaScript
            </span>

            <span className="bg-green-600 text-white px-4 py-2 rounded-full">
              JSON Server
            </span>

          </div>

        </div>


        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Built With ❤️ Using React
          </h2>

          <p className="text-gray-500 mt-2">
            Expense Tracker helps users make smarter financial decisions.
          </p>
        </div>


      </div>

    </div>
  );
};

export default About;