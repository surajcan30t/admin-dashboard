import React from "react";

const page = () => {
  return (
    <div className="flex flex-col col-span-3">
      <div className="text-center text-4xl font-bold capitalize m-5">Organizations Details...</div>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-zinc-100">
            <thead className="text-xs text-zinc-100 uppercase bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3 text-lg font-bold">
                  Organization name
                </th>
                <th scope="col" className="px-6 py-3 text-lg font-bold">
                  Organization Type
                </th>
                <th scope="col" className="px-6 py-3 text-lg font-bold">
                  No Of Teams
                </th>
                <th scope="col" className="px-6 py-3 text-lg font-bold">
                  No Of Members
                </th>
                <th scope="col" className="px-6 py-3 text-lg font-bold">
                  Equipments
                </th>
                <th scope="col" className="px-6 py-3 text-lg font-bold">
                  Area Of Activity
                </th>
                <th scope="col" className="px-6 py-3 text-lg font-bold">
                  License No:
                </th>
                <th scope="col" className="px-6 py-3 text-lg font-bold">
                  Station Address
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
