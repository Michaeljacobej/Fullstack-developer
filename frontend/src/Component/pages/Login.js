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
import { Router, useLocation, useNavigate } from 'react-router';
import { Navigation } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        HAI BANK
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(9, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Login() {
  const classes = useStyles();

  const paperStyle={padding:'50px 20px',Width:600 ,margin:"20px auto"}
  const[email,setEmail]=React.useState('')
  const[password,setPassword]=React.useState('')
  const[user,setUser]=React.useState([])
  const location = useLocation()

  let navigate = useNavigate();


  let datauser,datauserok;

  const handleClick=(e)=>{
    e.preventDefault()

    fetch("http://localhost:8080/data/login")
    .then((response) => {
      return response.json();
    })
    .then((res) => {

     const data = {
        rows:res.map((user) => ({
        firstName: user.firstName, 
        lastName: user.lastName,
        email: user.emailAddress ,
        password:user.password
       })),
      };

      datauser = JSON.parse(JSON.stringify(data["rows"]));
     
      datauserok = Object.assign({}, datauser);
     
      let str = -1 ;
      var size = Object.keys(datauserok).length;

      for (let i = 0; i < size; i++) {
         str +=1;
         if(datauserok[str]["email"]=== email && datauserok[str]["password"]=== password ){
         
          localStorage.setItem("first-name",JSON.stringify(datauserok[str]["firstName"]))
          localStorage.setItem("last-name",JSON.stringify(datauserok[str]["lastName"]))  
          navigate("/dashboard",email);
   
         }
      }
    
    }
  )
}


// const handleClick=(e)=>{
//     e.preventDefault()
//     if (localStorage.getItem('user-info')){
//       navigate("/dashboard/");
//     }

// }

  return (
    
    <Grid container component="main" className={classes.root}>
       
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        
        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
         
          />
         
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forget-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          
          <Box mt={5}>
            <Copyright />
          </Box>

        </form>
      </div>
      <div className={classes.paper}>
 
        
        </div>
      
    </Grid>


  </Grid>  
  )
}

export default Login