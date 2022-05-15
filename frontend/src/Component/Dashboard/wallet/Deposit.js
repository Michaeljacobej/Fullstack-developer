import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from '../../ReusableComponent/Dashboard/topbar/Topbar';
import Sidebar from '../../ReusableComponent/Dashboard/sidebar/Sidebar';
import { useNavigate } from 'react-router';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop: 10
  },

  deposit: {
    flex: 4,
    paddingLeft: 30,
    paddingTop: 20
  },

  addDeposit: {
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

export default function Deposit() {
  const classes = useStyles();
  
  const [money, setMoney] = React.useState('')
  const [deposit, setDeposit] = React.useState('')
  const [transfer, setTransfer] = React.useState('')
  const [accountNumber, setAccountNumber] = React.useState('')


  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault()
    const transaction= {money, deposit, transfer,accountNumber}
    console.log(transaction)
    fetch("http://localhost:8080/data/createtransaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction)
    }).then(() => {
      console.log("transaction is Added")
    })
    navigate("/dashboard/wallet");
  }
  

  return (
    <div>
      <Topbar />
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.deposit}>
          <h1>Deposit</h1>
          <form className={classes.form} noValidate>
            <div className={classes.addDeposit}>
              <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000', marginBottom: 10}}>Name</p>
              <TextField
                name="User"
                variant="outlined"
                required
                fullWidth
                id="User"
                autoFocus
                // value={user}
                // onChange={(e)=>setUser(e.target.value)}
              />
            </div>
            <div className={classes.addDeposit}>
              <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000', marginBottom: 10}}>Card Number</p>
              <TextField
                name="Card Number"
                variant="outlined"
                required
                fullWidth
                id="accountNumber"
                autoFocus
                value={accountNumber}
                onChange={(e)=>setAccountNumber(e.target.value)}
            
              />
            </div>
            <div className={classes.addDeposit}>
              <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000', marginBottom: 10}}>Amount</p>
              <TextField
                name="Amount"
                variant="outlined"
                required
                fullWidth
                id="deposit"
                autoFocus
                value={deposit}
                onChange={(e)=>setDeposit(e.target.value)}
              />
            </div>
            <div className={classes.addDeposit}>
              <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000', marginBottom: 10}}>Description</p>
              <TextField
                name="Description"
                variant="outlined"
                required
                fullWidth
                id="deposit"
                autoFocus
                // value={user}
                // onChange={(e)=>setUser(e.target.value)}
              />
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
                  DEPOSIT
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}