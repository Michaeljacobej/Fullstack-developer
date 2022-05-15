import "./featuredInfo.css";
import { 
  ArrowDownward, 
  ArrowUpward 
} from "@material-ui/icons";

export default function featuredInfo() {
  let vmoney=localStorage.getItem("total-money")
  let vdeposito=localStorage.getItem("total-deposito")
  let vtransfer=localStorage.getItem("total-transfer") 
  
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">My money</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp {vmoney}</span>
      
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Expense</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp {vtransfer}</span>
       
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Income</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp {vdeposito}</span>
        
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
