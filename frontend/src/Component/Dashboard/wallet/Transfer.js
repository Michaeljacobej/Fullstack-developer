import "./transfer.css";
import FeaturedInfoTransfer from "../../ReusableComponent/featuredInfo/FeaturedInfoTransfer";
import Topbar from "../../ReusableComponent/Dashboard/topbar/Topbar";
import Sidebar from "../../ReusableComponent/Dashboard/sidebar/Sidebar";

import TransferList from "./TransferList";

export default function Transfer() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfoTransfer/>
          <div className="homeWidgets"  >
            <TransferList/> 
          </div>
       </div>
      </div>
    </div>
  );
}
