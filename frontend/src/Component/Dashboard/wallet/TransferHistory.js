import "./transferHistory.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Topbar from "../../ReusableComponent/Dashboard/topbar/Topbar";
import Sidebar from "../../ReusableComponent/Dashboard/sidebar/Sidebar";
import { Button } from "@material-ui/core";

export default function TransferHistory() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "money",
      headerName: "Money",
      width: 400
    },
    { field: "deposit", headerName: "Deposit", width: 400 },
    { 
      field: "transfer", headerName: "Transfer", width: 400 
  
    },  
    { 
      field: "accountNumber", headerName: "Account Number", width: 400 
  
    },
  ];

  let datauser,datauserok;

  React.useEffect(()=>{
    fetch("http://localhost:8080/data/getalltransaction")
    .then((response) => {
      return response.json();
    })
    .then((res) => {

      const data = {
         rows:res.map((user) => ({
        id:user.id,
         money: user.money ,
         deposito:user.deposit,
         transfer:user.transfer,
         accountNumber:user.accountNumber
        })),
       };
 
       datauser = JSON.parse(JSON.stringify(data["rows"]));
      
       datauserok = Object.assign({}, datauser);
      
       let money= 0;
       let transfer=0;
       let deposito=0;
       let str = -1 ;
       var data_table={} , cart=[];
       var data_table_money={};
       var data_table_transfer={};
       var data_table_deposito={};
       var data_table_account={};
       var array=[]
       var size = Object.keys(datauserok).length;
       for (let i = 0; i < size; i++) {
         
        // total money
           money = money+datauserok[i]['money'] +datauserok[i]['deposito']-datauserok[i]['transfer'];            
           transfer +=datauserok[i]['transfer'];
           deposito +=datauserok[i]['deposito'];
          
           data_table.id = datauserok[i]['id'];
           data_table.money=money;
           data_table.transfer=datauserok[i]['transfer'];
          data_table.deposit=datauserok[i]['deposito'];
           data_table.accountNumber=datauserok[i]['accountNumber'];
           cart.push( data_table)

          }
          
          setData(cart);       
         
         
          
        
          localStorage.setItem("total-money",money)
          localStorage.setItem("total-deposito",deposito)
          localStorage.setItem("total-transfer",transfer) 

     }
  )
  },[])


  
  



  
  return (
    <div>
      <div className="container">
        <div className="productList">
          <div>
            <h3>Last Transaction History</h3>
        </div>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
