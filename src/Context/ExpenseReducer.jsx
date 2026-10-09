const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
  return {
    ...state,
    loading: true,
  };
    case "GET_EXPENSES":
      return {
        ...state,
        expense: action.payload,
        loading: false,
      };

    case "ADD_EXPENSE":
      return {
        ...state,
        expense: [...state.expense, action.payload],
      };
      case "DELETE_EXPENSE":
     return {
    ...state,
    expense: state.expense.filter(
      (item) => item.id !== action.payload
    ),
  };
  case "UPDATE_EXPENSE":
 return {
   ...state,
   expense: state.expense.map((item)=>
     item.id === action.payload.id
     ? action.payload
     : item
   )
 };

    default:
      return state;
  }
};

export default ExpenseReducer;