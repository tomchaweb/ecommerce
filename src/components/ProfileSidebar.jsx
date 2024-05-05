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
        <h1>Profile</h1>
      </div>
      <ul>
        <Link to="account">
          <PersonIcon size={24} color={"currentColor"} />
          My Account
        </Link>
        <Link to="orders">
          <PackageIcon size={20} color={"currentColor"} />
          My Orders
        </Link>
        <Link to="settings">
          <GearIcon size={20} color={"currentcolor"} />
          My Settings
        </Link>
      </ul>
    </div>
  );
}
