import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import './search.scss'

const DocumentSelect = () => {
  const [usersdoc, setDocUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    setDocUsers(userDocData);
  }, []);
  // here you can see checked data
  // all checked data are there in selectedUser
  console.log(selectedUser);

  const userDocData = [
    { id: 1, name: "Accounting", },
    { id: 2, name: "ACH", },
    { id: 3, name: "Banking", },
    { id: 4, name: "Banking Services Branch", },
    { id: 5, name: "Banking Derivatives", },
    { id: 6, name: "Capital Markets", },
    { id: 7, name: "Line Item Twoing ", },
    { id: 8, name: "Collection Items", },
    { id: 9, name: "Commercial Loans", },
    { id: 10, name: "Consumer Credit", },
    { id: 11, name: "Money Market", },
    { id: 12, name: "Corporate Banking", },
    { id: 13, name: " Funds Management ", },
    { id: 14, name: "International Banking", },
    { id: 15, name: "International Payments", },
    { id: 16, name: "Trust Investments", },
    { id: 17, name: "Trust Services", },
    { id: 18, name: "Trust Tax & Probate", },
    { id: 19, name: "Wire Transfers", },
  ];

  const handleChange = (e, data) => {
    const { name, checked } = e.target;
    if (checked) {
      // if cheked and selectall checkbox add all fileds to selectedList
      if (name === "allSelect") {
        setSelectedUser(usersdoc);
      } else {
        // if cheked and specific checkbox add specific field to selectedList
        setSelectedUser([...selectedUser, data]);
      }
    } else {
      // if uncheked and selectall checkbox add remove all fileds from selectedList
      if (name === "allSelect") {
        setSelectedUser([]);
      } else {
        // if uncheked and specific checkbox remove specific field from selectedList
        let tempuser = selectedUser.filter((item) => item.id !== data.id);
        setSelectedUser(tempuser);
      }
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          <th className="form-checkbox-input">
            <input
              type="checkbox"
              className="form-check-input larger"
              name="allSelect"
              // allSelect selected when both length equal
              // slecteduser === allUser
              checked={selectedUser?.length === usersdoc?.length}
              onChange={(e) => handleChange(e, usersdoc)}
            /> Select All
          </th>
          
        </tr>
      </thead>
      <tbody>
        {usersdoc &&
          usersdoc.map((data, index) => (
            <tr id={index} key={index}>
              <td className="form-checkbox-input select_options">
                <input
                  type="checkbox"
                  className="form-check-input larger"
                  name={data.name}
                  // checked when selectedUser contains checked object/filed/row
                  checked={selectedUser.some((item) => item?.id === data.id)}
                  onChange={(e) => handleChange(e, data)}
                />
                <span>{data.name}</span>
              </td>
             
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default DocumentSelect;