import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

export function EditEmployee() {
  const { id } = useParams();
  const { employees, editEmployee } = useContext(GlobalContext);
  const navigate = useNavigate();

  const employee = employees.find((employee) => employee.id === id);

  const [name, setName] = useState(employee.name);
  const [location, setLocation] = useState(employee.location);
  const [designation, setDesignation] = useState(employee.designation);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name && !location && !designation)
      return console.log("Enter all fields");

    editEmployee({ id, name, location, designation });
    console.log({ id, name, location, designation });
    navigate("/");
  };

  const handleNameChange = (name) => setName(name);
  const handleLocationChange = (location) => setLocation(location);
  const handleDesignationChange = (designation) => setDesignation(designation);

  return (
    <>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name">
              Name of employee
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location">
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={location}
              onChange={(e) => handleLocationChange(e.target.value)}
              type="text"
              placeholder="Enter location"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="designation">
              Designation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={designation}
              onChange={(e) => handleDesignationChange(e.target.value)}
              type="text"
              placeholder="Enter designation"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
