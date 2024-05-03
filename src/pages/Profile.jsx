import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ProfileSidebar from "../components/ProfileSidebar";

export default function Profile() {
  return (
    <div className="profile-page">
      <ScrollToTop />
      <div className="profile">
        <ProfileSidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
