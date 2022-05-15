import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router';
import Topbar from '../../ReusableComponent/Dashboard/topbar/Topbar';
import Sidebar from '../../ReusableComponent/Dashboard/sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop: 10
  },

  newProduct: {
    flex: 4,
    paddingLeft: 30,
    paddingTop: 20
  },

  addProductItem: {
    display: 'flex',
    width: '80%',
    flexDirection: 'column',
    marginBottom: 5
  },

  form: {
    marginTop: 10
  },

  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  button: {
    marginTop: 20
  }
}));

function ViewProduct() {
  const classes = useStyles();

  const [product, setProduct] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [description, setDescrption] = React.useState('')

  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault()
    const registerProduct = { product, category, description }
    console.log(registerProduct)
    fetch("http://localhost:8080/data/createproductlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerProduct)
    }).then(() => {
      console.log("Register Product is Added")
    })
    navigate("/dashboard/products");
  }

  return (
    <div>
      <Topbar />
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.newProduct}>
          <h1>View Product</h1>
          <form className={classes.form} noValidate>
            <div className={classes.addProductItem}>
              <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000', marginBottom: 10}}>Product Name</p>
              <TextField
                id="filled-read-only-input"
                defaultValue={product}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
                fullWidth
              />
            </div>
            <div className={classes.addProductItem}>
            <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000'}}>Product Description</p>
              <TextField                
                id="filled-read-only-input"
                defaultValue={description}
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                variant="outlined"
              />
            </div>
            <Grid item xs={12}></Grid>
            <div className={classes.addProductItem}>
              <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000'}}>Product Category</p>
              <TextField
                id="filled-read-only-input"
                defaultValue={category}
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                variant="outlined"
              >
              </TextField>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default ViewProduct