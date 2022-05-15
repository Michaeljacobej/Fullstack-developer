import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../ReusableComponent/Dashboard/topbar/Topbar";
import Sidebar from "../../ReusableComponent/Dashboard/sidebar/Sidebar";
import { Button, Grid, TextField } from "@material-ui/core"; 
import * as React from 'react';
import { confirm } from "react-confirm-box";

export default function ProductList() {
  const [data, setData] = useState([]);
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    fetch(`http://localhost:8080/data/productlist/${id}`, { method: 'DELETE' })
    .then(() =>  setData(data.filter((item) => item.id !== id))
    );
  };

  const onClickItems = async (options) => {
    const result = await confirm("Are you sure to delete this items?", options);
    if (result) {
      console.log("You click Yes!");
    }
    console.log("You click No!");
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "product",
      headerName: "Product",
      width: 200,

    },
    { field: "category", headerName: "Category", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/dashboard/products/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            
             
            <Link to={`/dashboard/products/view/${params.row.id}`}>
              <button className="productListEdit">view</button>
            </Link>
           

            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  
  React.useEffect(()=>{
    fetch("http://localhost:8080/data/getallproductlist")
    .then(res=>res.json())
    .then((result)=>{
      setData(result);
    
    }
  )
  },[])

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="productList">
          <div style={{marginBottom: 10}}>
            <Grid container xs = {12}>
              <Grid container xs = {12}>
                <h3 style={{fontSize: 24}}>PRODUCT LIST</h3>
              </Grid>
              <Grid container xs = {8}>
                <TextField variant="outlined" autoFocus style={{width:"60%", height:"50%", marginRight:20}}/>
                <Button size="medium" href="/dashboard/categorylist/registercategory" variant='contained' style={{backgroundColor: 'green', color: '#fff'}}>
                  Search Product By Id
                </Button>
              </Grid>
              <Grid container xs = {4} justifyContent = {'flex-end'}>
                <Button size="medium" href="/dashboard/products/registerproduct" variant='contained' color='primary'
                >
                  Create New Product
                </Button>
              </Grid>
            </Grid>
          </div>
          <DataGrid class="expand-trigger"
            rows={data}
            disableSelectionOnClick
            columns={columns}
            // pageSize={8}
          />
        </div>
      </div>
    </div>
  );
}
