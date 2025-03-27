import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 fw-bold">Week 10 Deliverable</h1>
      <p className="lead">Deployment of React Router SPA</p>
      <Link to="/about" className="btn btn-success btn-lg mt-3">
        Learn More..
      </Link>
    </div>
  );
}
