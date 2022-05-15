import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
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
  }
}));

function ViewCategory() {
  const classes = useStyles();

 const[category,setCategory]=React.useState('')
  const[description,setDescription]=React.useState('')
  
  let navigate = useNavigate();

  const handleClick=(e)=>{
      e.preventDefault()
      const RegisterCategory={category,description}
      console.log(RegisterCategory)
      fetch("http://localhost:8080/data/createproductcategory",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(RegisterCategory)
      }).then(()=>{
        console.log("Category is Added")
      })
      navigate("/dashboard/categorylist");
  }


  return (
    <div>
      <Topbar />
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.newProduct}>
          <h1>Add New Product</h1>
          <form className={classes.form} noValidate>
            <div className={classes.addProductItem}>
              <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000', marginBottom: 10}}>Category Name</p>
              <TextField
                id="filled-read-only-input"
                defaultValue={category}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
                fullWidth
              />
            </div>
            <Grid item xs={12}></Grid>
            <div className={classes.addProductItem}>
            <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000'}}>Category Description</p>
              <TextField
                id="filled-read-only-input"
                defaultValue={description}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
                fullWidth
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default ViewCategory