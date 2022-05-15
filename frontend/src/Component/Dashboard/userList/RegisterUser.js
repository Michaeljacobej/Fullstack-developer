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
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop: 10
  },

  newUser: {
    flex: 4,
    paddingLeft: 30,
    paddingTop: 20
  },

  addUser: {
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



function RegisterUser() {
  const classes = useStyles();

  const[user,setUser]=React.useState('')
  const[email,setEmail]=React.useState('')
  const[status,setStatus]=React.useState('')
  const[role,setRole]=React.useState('')
  let navigate = useNavigate();
  
  const handleClick=(e)=>{
      e.preventDefault()
      const custommerAccount={user,email,status,role}
      console.log(custommerAccount)
      fetch("http://localhost:8080/data/createcustommer",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(custommerAccount)
      }).then(()=>{
        console.log("Custommer Account is Added")
      })
      navigate("/dashboard/users");
  }

  return (
    <div>
      <Topbar />
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.newUser}>
          <h1>Register User</h1>
          <form className={classes.form} noValidate>
            <div className={classes.addUser}>
              <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000', marginBottom: 10}}>Name</p>
              <TextField
                name="User"
                variant="outlined"
                required
                fullWidth
                id="User"
                autoFocus
                value={user}
                onChange={(e)=>setUser(e.target.value)}
              />
            </div>
            <div className={classes.addUser}>
            <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000'}}>Email</p>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="Email"
                name="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <Grid item xs={12}></Grid>
            <div className={classes.addUser}>
            <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000'}}>Status</p>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="Status"
                name="Status"
                autoComplete="Status"
                value={status}
                onChange={(e)=>setStatus(e.target.value)}
              />
            </div>
            <Grid item xs={12}></Grid>
            <div className={classes.addUser}>
            <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000'}}>Role</p>
              <TextField
                id="outlined-select-category"
                required
                fullWidth
                autoFocus
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                variant="outlined"
              >
                  {/* <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem> */}
              </TextField>
            </div>
            <div className={classes.button}>
              <Link href="/dashboard" variant="body2">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                  style={{width: '50%', height: 50, fontSize: 16}}
                >
                  Add User
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default RegisterUser