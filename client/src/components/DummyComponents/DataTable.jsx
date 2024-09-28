import React, { useState } from "react";
import { Link } from "react-router-dom";

// Nested datasets with subcategories
const dataSets = {
  set1: {
    categoryA: [
      {
        id: "1C5LDd5",
        title: "Name",
        totalClicks: 12,
        status: true,
        input: "Shubh Pundir",
        output: "Sh**********dir",
        date: "2024-09-25",
      },
      {
        id: "1D6MEe6",
        title: "Location 1",
        totalClicks: 20,
        status: false,
        input: "120 Deshparan Sasmal Road",
        output: "12******oad",
        date: "2024-09-26",
      },
    ],
    categoryB: [
      {
        id: "2E7NFe7",
        title: "Mobile",
        totalClicks: 15,
        status: true,
        input: "5956554665",
        output: "59565*****",
        date: "2024-09-27",
      },
    ],
  },
  set2: {
    categoryA: [
      {
        id: "3F8OGf8",
        title: "IFSC Code",
        totalClicks: 25,
        status: true,
        input: "SBI045484465156",
        output: "SBI0454********",
        date: "2024-09-28",
      },
    ],
    categoryB: [
      {
        id: "4G9PHg9",
        title: "Database Access",
        totalClicks: 30,
        status: false,
        input: "Database ID: DB54321",
        output: "Database ID: ****4321",
        date: "2024-09-29",
      },
      {
        id: "5H1IJh1",
        title: "User Authentication",
        totalClicks: 18,
        status: true,
        input: "Auth ID: AUTH65432",
        output: "Auth ID: ****5432",
        date: "2024-09-30",
      },
    ],
  },
  set3: {
    categoryA: [
      {
        id: "6J2KLj2",
        title: "Haryana Driver's LLW",
        totalClicks: 8,
        status: true,
        input: "HR23813213",
        output: "HR2381*****",
        date: "2024-10-01",
      },
    ],
    categoryB: [
      {
        id: "7M3NLo3",
        title: "Audit Logs",
        totalClicks: 12,
        status: false,
        input: "Audit ID: AUD654",
        output: "Audit ID: ****654",
        date: "2024-10-02",
      },
      {
        id: "8P4QRp4",
        title: "Server Configuration",
        totalClicks: 22,
        status: true,
        input: "Server ID: SERV1234",
        output: "Server ID: *****234",
        date: "2024-10-03",
      },
    ],
  },
};

// Table component
const DataTable = () => {
  const [selectedDataSet, setSelectedDataSet] = useState("set1"); // Default dataset
  const [selectedCategory, setSelectedCategory] = useState("categoryA"); // Default category

  const handleDataSetChange = (event) => {
    setSelectedDataSet(event.target.value); // Update state on dataset selection
    setSelectedCategory("categoryA"); // Reset category when dataset changes
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Update state on category selection
  };

  const currentData = dataSets[selectedDataSet][selectedCategory]; // Get the selected dataset and category data

  return (
    <div className="flex">
      {/* Sidebar with cards */}
      <aside className="w-1/4 p-4 bg-gray-100 h-screen">
        <h3 className="text-lg font-semibold mb-4">Select Docs</h3>

        {/* Card for Dataset 1 */}
        <div
          onClick={() => setSelectedDataSet("set1")}
          className={`cursor-pointer p-4 mb-4 border rounded shadow-sm ${
            selectedDataSet === "set1" ? "bg-blue-100" : "bg-white"
          }`}
        >
          <h4 className="font-bold">Doc 1</h4>
          <p>Shubh Pundir's address</p>
        </div>

        {/* Card for Dataset 2 */}
        <div
          onClick={() => setSelectedDataSet("set2")}
          className={`cursor-pointer p-4 mb-4 border rounded shadow-sm ${
            selectedDataSet === "set2" ? "bg-blue-100" : "bg-white"
          }`}
        >
          <h4 className="font-bold">Doc 2</h4>
          <p>Soham Vashisht's SBI BANK passbook</p>
        </div>

        {/* Card for Dataset 3 */}
        <div
          onClick={() => setSelectedDataSet("set3")}
          className={`cursor-pointer p-4 border rounded shadow-sm ${
            selectedDataSet === "set3" ? "bg-blue-100" : "bg-white"
          }`}
        >
          <h4 className="font-bold">Doc 3</h4>
          <p>Nilesh Sharma's Driver's License</p>
        </div>
      </aside>

      {/* Main content area */}
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Select Role:</h2>
        <select
          className="p-2 border border-gray-300 rounded-md mb-4"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="categoryA">Hr</option>
          <option value="categoryB">Admin</option>
        </select>

        {/* Table to display data */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Total Clicks</th>
                <th className="border px-4 py-2">Input</th>
                <th className="border px-4 py-2">Output</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Audits</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">{item.totalClicks}</td>
                  <td className="border px-4 py-2">{item.input}</td>
                  <td className="border px-4 py-2">{item.output}</td>
                  <td className="border px-4 py-2">{item.date}</td>
                  <td className="border px-4 py-2">
                    <div className="form-control ">
                      <label className="label cursor-pointer">
                        {/* <span className="label-text">Revoke Status :</span> */}
                        {item.status ? (
                          <span className="text-green-600">Granted</span>
                        ) : (
                          <span className="text-red-600">Revoked</span>
                        )}
                        <input
                          type="checkbox"
                          className="toggle toggle-accent"
                          defaultChecked
                        />
                      </label>
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    <Link
                      className="bg-green-500 p-1 rounded-lg"
                      to={`/network-logs/${item.id}`}
                    >
                      View Audit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
