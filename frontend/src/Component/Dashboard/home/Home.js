import "./home.css";
import FeaturedInfo from "../../ReusableComponent/featuredInfo/FeaturedInfo";
import Topbar from "../../ReusableComponent/Dashboard/topbar/Topbar";
import Sidebar from "../../ReusableComponent/Dashboard/sidebar/Sidebar";
import TransferHistory from "../wallet/TransferHistory";
import UserHistory from "../userList/UserHistory";

export default function Home() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <div className="homeWidgets">
            <UserHistory/>
            <TransferHistory/> 
          </div>
       </div>
      </div>
    </div>
  );
}
