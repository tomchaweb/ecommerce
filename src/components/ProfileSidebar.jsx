import { Link } from "react-router-dom";

import UserIcon from "./svg/UserIcon";

export default function ProfileSidebar() {
  return (
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
  );
}
