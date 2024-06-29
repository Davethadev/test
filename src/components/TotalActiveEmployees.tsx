import { employeesData } from "@/constants/employeesData";

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
} from "@/components/ui/dropdown-menu";
import { HiDotsVertical } from "react-icons/hi";

const TotalActiveEmployees = () => {
  return (
    <div className="">
      <h2 className="open-sans-bolder text-xl text-center">
        Total Active Employees: 53
      </h2>
      <Table className="mt-5">
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
        <TableBody>
          {employeesData.map((employee) => {
            const {
              serial_no,
              name,
              employee_id,
              phone_number,
              email_address,
              department,
              document_status,
            } = employee;
            return (
              <TableRow key={serial_no}>
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
                <TableCell className="poppins-regular text-greenShade text-xs">
                  <div className="h-6 w-24 bg-lightGreen rounded-md flex justify-center items-center">
                    {document_status}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <HiDotsVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-3 w-[150px]">
                      <div className="space-y-2 w-[90%] mx-auto">
                        <button className="poppins-regular text-black text-sm text-left w-full">
                          Edit
                        </button>
                        <div className="w-full h-[1px] bg-[#C3C3C3]"></div>
                        <button className="poppins-regular text-[#AE1E1E] text-sm text-left w-full">
                          Delete
                        </button>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TotalActiveEmployees;
