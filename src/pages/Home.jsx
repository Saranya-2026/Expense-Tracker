import React,{useState,useContext} from 'react'
import Header from "../components/Header";
import Summary from "../components/Summary";
import Searchbar from "../components/Searchbar";
import ExpenseList from "../components/ExpenseList"
import Loader from '../components/Loader';
import {ExpenseContext} from '../Context/ExpenseContext'
import ExpenseChart from '../components/ExpenseChart'


const Home = () => {
  const[search,setSearch]=useState("")
  const[filter,setFilter]=useState("All")
  const[category,setCategory]=useState("All")
  const { state } = useContext(ExpenseContext);
  if (state.loading) {
  return <Loader />;
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
  <div className="max-w-7xl mx-auto">
   

        <Header />

        <Summary />
        
        <ExpenseChart/>

        <Searchbar  search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        category={category}
        setCategory={setCategory}/>

        <ExpenseList  search={search}
        filter={filter}
        category={category}/>

      </div>

    </div>
  );
};

export default Home;
