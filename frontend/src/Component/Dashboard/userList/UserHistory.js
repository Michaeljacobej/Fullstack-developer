import "./userHistory.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../ReusableComponent/Dashboard/topbar/Topbar";
import Sidebar from "../../ReusableComponent/Dashboard/sidebar/Sidebar";
import { Button, Grid, TextField } from "@material-ui/core";
import * as React from 'react';

export default function UserHistory() {
  const [data, setData] =  useState([]);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    fetch(`http://localhost:8080/data/custommer/${id}`, { method: 'DELETE' })
    .then(() =>  setData(data.filter((item) => item.id !== id))
    );
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "User",
      width: 200,
    
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "role",
      headerName: "Role",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/dashboard/users/${params.row.id}` }>
              <button className="userListEdit">Edit</button>
            </Link>
            <Link to={`/dashboard/users/view/${params.row.id}`}>
              <button className="productListEdit">view</button>
            </Link>

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];


React.useEffect(()=>{
  fetch("http://localhost:8080/data/getallcustommer")
  .then(res=>res.json())
  .then((result)=>{
    setData(result);

  
  }
)
},[])

  return (
    <div>

      <div className="container">
     
        <div className="userList">
          <div style={{marginBottom: 10}}>
            <Grid container xs = {12}>
              <Grid container xs = {12}>
                <h3 style={{fontSize: 24}}>USERS LIST</h3>
              </Grid>
     
            </Grid>
          </div>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={100}
          />
        </div>
      </div>
    </div>
  );
}
