import "./sidebar.css";
import {
  Home,
  AccountBalanceWallet,
  Send,
  CreditCard,
  FitnessCenter,
  Person,
  VerifiedUser,
  ExitToApp,
  Category
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>

            <Link to="/dashboard/wallet" className="link">
              <li className="sidebarListItem">
              <AccountBalanceWallet className="sidebarIcon" />
                Wallet
              </li>
            </Link>

            <Link to="/dashboard/products" className="link">
              <li className="sidebarListItem">
                <FitnessCenter className="sidebarIcon" />
                Products
              </li>
            </Link>

            <Link to="/dashboard/users" className="link">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" />
                Customers
              </li>
            </Link>

            <Link to="/dashboard/categorylist" className="link">
              <li className="sidebarListItem">
                <Category className="sidebarIcon" />
                Product Categories
              </li>
            </Link>


            <Link to="/" className="link">
              <li className="sidebarListItem">
                <ExitToApp className="sidebarIcon" />
                Log Out
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
