import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import './search.scss'

const OfficeSelect = () => {
  const [usersofc, setOfcUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    setOfcUsers(userOfcData);
  }, []);
  // here you can see checked data
  // all checked data are there in selectedUser
  console.log(selectedUser);

  const userOfcData = [
    { id: 1, name: "Depository Financial Institution", },
    { id: 2, name: "Limited Purpose Bank", },
    { id: 3, name: "Line Item Two", },
  ];

  const handleChange = (e, data) => {
    const { name, checked } = e.target;
    if (checked) {
      // if cheked and selectall checkbox add all fileds to selectedList
      if (name === "allSelect") {
        setSelectedUser(usersofc);
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
              checked={selectedUser?.length === usersofc?.length}
              onChange={(e) => handleChange(e, usersofc)}
            /> Select All
          </th>
          
        </tr>
      </thead>
      <tbody>
        {usersofc &&
          usersofc.map((data, index) => (
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

export default OfficeSelect;