import React from 'react'
import { useState } from "react";

const Searchbar = ({ search, setSearch, filter, setFilter ,category,setCategory}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-6">

      <input
        type="text"
        placeholder="🔍 Search Expense..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-3 border rounded-xl shadow"
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-3 border rounded-xl shadow"
      >
        <option value="All">All</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="p-3 border rounded-xl shadow"
>
  <option value="All">All Categories</option>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Shopping">Shopping</option>
  <option value="Medical">Medical</option>
  <option value="Salary">Salary</option>
  <option value="Others">Others</option>
</select>

    </div>
  );
};

export default Searchbar;