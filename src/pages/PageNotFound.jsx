import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function PageNotFound() {
  return (
    <>
      <div className="page-not-found">
        <h1>404</h1>
        <h2>Oops! Page not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
      <Footer />
    </>
  );
}
