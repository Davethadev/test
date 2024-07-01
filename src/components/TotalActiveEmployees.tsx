import { useState, useEffect } from "react";
import { employees } from "@/constants/employees";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { PaginationComponent } from "./Pagination";
import { HiDotsVertical } from "react-icons/hi";
import toast from "react-hot-toast";

const TotalActiveEmployees = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeEmployees, setActiveEmployees] = useState(employees);
  const [numberOfActiveEmployees, setNumberOfActiveEmployees] = useState<
    number | null
  >(null);

  const filteredEmployees = activeEmployees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.employee_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email_address
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      employee.phone_number.includes(searchQuery) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.document_status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstindex = lastIndex - recordsPerPage;
  const paginatedEmployees = filteredEmployees.slice(firstindex, lastIndex);
  const nPage = Math.ceil(filteredEmployees.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const handleApproveDocument = (id: number) => {
    setActiveEmployees((prevEmployees) => {
      const updatedEmployees = prevEmployees.map((employee) =>
        employee.id === id
          ? { ...employee, document_status: "successfull" }
          : employee
      );
      return updatedEmployees;
    });
    toast.success("Action was successfull");
  };

  const handleRejectDocument = (id: number) => {
    setActiveEmployees((prevEmployees) => {
      const updatedEmployees = prevEmployees.map((employee) =>
        employee.id === id
          ? { ...employee, document_status: "failed" }
          : employee
      );
      return updatedEmployees;
    });
    toast.success("Action was successfull");
  };

  const handleRemoveEmployee = (id: number) => {
    setActiveEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
    toast.success("Action was successfull");
  };

  useEffect(() => {
    setNumberOfActiveEmployees(activeEmployees.length);
  }, [activeEmployees]);

  return (
    <div>
      <div className="relative my-5">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-72 h-auto border-[1px] bg-white border-gray hover:border-primary focus:border-primary rounded-md text-sm poppins-regular placeholder:text-sm placeholder:poppins-regular text-black placeholder:text-gray focus:outline-none indent-8 py-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="absolute left-4 top-2 md:top-2.5">
          <img src="./search.svg" alt="" />
        </span>
      </div>
      <div className="pb-5">
        <h2 className="open-sans-bolder text-xl text-center">
          Total Active Employees: {numberOfActiveEmployees}
        </h2>
        <div className="border-[1px] border-primary rounded-lg mt-5">
          <Table
            className={`${
              filteredEmployees && filteredEmployees.length === 0
                ? "min-h-96"
                : "min-h-auto"
            }`}
          >
            <TableHeader>
              <TableRow>
                <TableHead className="poppins-regular text-sm text-white">
                  s/n
                </TableHead>
                <TableHead className="poppins-regular text-sm text-white">
                  Name
                </TableHead>
                <TableHead className="poppins-regular text-sm text-white">
                  Employee ID
                </TableHead>
                <TableHead className="poppins-regular text-sm text-white">
                  Email address
                </TableHead>
                <TableHead className="poppins-regular text-sm text-white">
                  Phone number
                </TableHead>
                <TableHead className="poppins-regular text-sm text-white">
                  Department
                </TableHead>
                <TableHead className="poppins-regular text-sm text-white">
                  Document status
                </TableHead>
                <TableHead className="poppins-regular text-sm text-white"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="relative h-full">
              {filteredEmployees.length === 0 ? (
                <div className="poppins-medium text-sm text-black absolute w-full h-full grid grid-cols-1 place-items-center place-content-center">
                  No employees found
                </div>
              ) : (
                paginatedEmployees.map((employee) => {
                  const {
                    id,
                    serial_no,
                    name,
                    employee_id,
                    phone_number,
                    email_address,
                    department,
                    document_status,
                  } = employee;
                  return (
                    <TableRow key={id}>
                      <TableCell className="poppins-regular text-black">
                        {serial_no}
                      </TableCell>
                      <TableCell className="poppins-regular text-black">
                        {name}
                      </TableCell>
                      <TableCell className="poppins-regular text-black">
                        {employee_id}
                      </TableCell>
                      <TableCell className="poppins-regular text-black">
                        {email_address}
                      </TableCell>
                      <TableCell className="poppins-regular text-black">
                        {phone_number}
                      </TableCell>
                      <TableCell className="poppins-regular text-black">
                        {department}
                      </TableCell>
                      <TableCell>
                        <div
                          className={`h-6 w-24 ${
                            document_status === "successfull"
                              ? "bg-lightGreen"
                              : "bg-pink"
                          } rounded-md flex justify-center items-center`}
                        >
                          <span
                            className={`poppins-regular ${
                              document_status === "successfull"
                                ? "text-greenShade"
                                : "text-red-500"
                            } text-xs`}
                          >
                            {document_status === "successfull"
                              ? "Successfull"
                              : "Failed"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <HiDotsVertical />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem
                              onClick={() => handleApproveDocument(id)}
                              className="poppins-regular text-black text-sm text-left w-full"
                            >
                              Approve
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => handleRejectDocument(id)}
                              className="poppins-regular text-sm text-left w-full"
                            >
                              Reject
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => handleRemoveEmployee(id)}
                              className="poppins-regular text-sm text-left text-red-500 w-full"
                            >
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between p-4 w-full">
            <p className="open-sans-bold">Rows per page: 10</p>
            <PaginationComponent
              currentPage={currentPage}
              nPage={nPage}
              numbers={numbers}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalActiveEmployees;
