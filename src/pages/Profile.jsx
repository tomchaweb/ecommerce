import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import UserIcon from "../components/svg/UserIcon";

export default function Profile() {
  return (
    <div className="profile-page">
      <ScrollToTop />
      <div className="profile">
        <div className="profile-sidebar">
          <div className="profile-sidebar-top">
            <UserIcon size={36} color={"currentColor"} />
            <h1>Profile</h1>
          </div>
          <ul>
            <Link to="account">My Account</Link>
            <Link to="orders">My Orders</Link>
            <Link to="settings">My Settings</Link>
          </ul>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
