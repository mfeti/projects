import { useState } from "react";
import { clientProjects } from "../constants/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";

interface Project {
  client: string;
  country: string;
  date: string;
  email: string;
  image: string;
  progress: string;
  project: string;
  status: string;
}

const Table = () => {
  const [projects, setProjects] = useState<Project[]>(clientProjects);
  return (
    <div className="p-4 w-[93%] ml-[5rem]">
      {/* Sorting */}
      <div className="felx items-center mb-5">
        <button className="border border-gray-700 flex items-center justify-center text-white p-2 rounded">
          <BiSort className="mr-[0.5rem]" /> Sort{" "}
          <AiOutlineDown className="ml-2" />
        </button>
      </div>
      {/* Main Table */}
      <table className="min-w-full table-auto rounded border border-gray-700 text-white">
        <thead>
          <tr>
            <th className="px-5 py-3 text-left">Image</th>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Country</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Project Name</th>
            <th className="px-5 py-3 text-left">Task Progress</th>
            <th className="px-5 py-3 text-left">Status</th>
            <th className="px-5 py-3 text-left">Date</th>
            <th className="px-5 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot></tfoot>
      </table>
      {/* Pagination */}
    </div>
  );
};

export default Table;
