import { Link } from "react-router-dom";

import UserIcon from "./svg/UserIcon";
import PersonIcon from "./svg/PersonIcon";
import PackageIcon from "./svg/PackageIcon";
import GearIcon from "./svg/GearIcon";

export default function ProfileSidebar() {
  return (
    <div className="profile-sidebar">
      <div className="profile-sidebar-top">
        <UserIcon size={36} color={"currentColor"} />
        <h1>User</h1>
      </div>
      <ul>
        <Link to="account">
          <PersonIcon size={24} color={"currentColor"} />
          <span>My Account</span>
        </Link>
        <Link to="orders">
          <PackageIcon size={20} color={"currentColor"} />
          <span>My Orders</span>
        </Link>
        <Link to="settings">
          <GearIcon size={20} color={"currentcolor"} />
          <span>My Settings</span>
        </Link>
      </ul>
    </div>
  );
}
