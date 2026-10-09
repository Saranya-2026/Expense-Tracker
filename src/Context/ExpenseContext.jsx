import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import ExpenseReducer from "./ExpenseReducer";
import {toast} from 'react-toastify'

export const ExpenseContext = createContext();

const initialState = {
  expense: [],
  loading: false,
};

const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  const getExpenses = async () => {
    dispatch({
      type:"SET_LOADING",
    })
    try {
      const response = await axios.get("http://localhost:3000/expense");

      dispatch({
        type: "GET_EXPENSES",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const addExpense = async (expense) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/expense",
        expense
      );

      dispatch({
        type: "ADD_EXPENSE",
        payload: response.data,
      });
        toast.success("Expenses added successfully..!!")
    } catch (error) {
      console.log(error);
      toast.error("failed to add expense!....")
    }
  };

  const deleteExpense = async (id) => {

  try {

    await axios.delete(
      `http://localhost:3000/expense/${id}`
    );


    dispatch({
      type:"DELETE_EXPENSE",
      payload:id
    });

toast.success("Expense Deleted Successfully!");
  } catch(error){

    console.log(error);

  }

};
const updateExpense = async(id, expense) => {
  try{
  const response = await axios.put(
    `http://localhost:3000/expense/${id}`,
    expense
  );

  dispatch({
    type:"UPDATE_EXPENSE",
    payload:response.data
  });
toast.success("Expense Updated Successfully!")
}
catch(error){
  console.log(error)
  toast.error("Update failed")
}
}

  return (
    <ExpenseContext.Provider
      value={{
        state,
        dispatch,
        addExpense,
        deleteExpense,
        updateExpense
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;