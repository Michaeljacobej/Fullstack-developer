import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
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

function EditProduct() {
  const classes = useStyles();

  const[product,setProduct]=React.useState('')
  const[category,setCategory]=React.useState('')
  const[description,setDescrption]=React.useState('')
  let navigate = useNavigate();

  const handleClick=(e)=>{
      e.preventDefault()
      const registerProduct={product,category,description}
      var url = window.location.href
      var id = url.substring(url.lastIndexOf('/') + 1);
      console.log(registerProduct)
      fetch(`http://localhost:8080/data/productlist/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(registerProduct)
      }).then(()=>{
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
          <h1>Edit Product</h1>
          <form className={classes.form} noValidate>
            <div className={classes.addProductItem}>
              <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000', marginBottom: 10}}>Product Name</p>
              <TextField
                name="Product Name"
                variant="outlined"
                required
                fullWidth
                id="productName"
                autoFocus
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            <div className={classes.addProductItem}>
            <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000'}}>Product's Photo</p>
              <input type="file" id="file" style={{weight:"50%", height:30}} />
            </div>
            <Grid item xs={12}></Grid>
            <div className={classes.addProductItem}>
            <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000'}}>Product Description</p>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                id="Description"
                name="Product Description"
                value={description}
                onChange={(e) => setDescrption(e.target.value)}
              />
              
            </div>
            <Grid item xs={12}></Grid>
            <div className={classes.addProductItem}>
            <p style={{fontSize: 18, fontWeight: 600, fontColor:'#000'}}>Product Category</p>
              <TextField
                id="outlined-select-category"
                required
                fullWidth
                autoFocus
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="outlined"
              >
                {/* {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))} */}
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
                  Add Product
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default EditProduct