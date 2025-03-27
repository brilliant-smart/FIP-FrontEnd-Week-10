export default function Project() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="card-title text-center">Understanding React Router</h1>
        <p className="card-text">
          React Router is a powerful <strong>client-side routing</strong>{" "}
          library that allows developers to build{" "}
          <strong>Single Page Applications (SPAs)</strong> with multiple views.
          Instead of refreshing the page, React Router updates the UI{" "}
          <strong>dynamically</strong>, creating a seamless navigation
          experience.
        </p>

        <h2 className="mt-4">Key Benefits of React Router:</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            🔹 <strong>Fast navigation</strong> without full-page reloads
          </li>
          <li className="list-group-item">
            🔹 <strong>Dynamic URL handling</strong> for better user experience
          </li>
          <li className="list-group-item">
            🔹 <strong>Declarative routing</strong> using{" "}
            <code>&lt;Route&gt;</code> and <code>&lt;Link&gt;</code> components
          </li>
          <li className="list-group-item">
            🔹 <strong>Nested routes & parameters</strong> for advanced
            applications
          </li>
        </ul>

        <p className="mt-4">
          This project uses <strong>React Router</strong> to demonstrate these
          features, ensuring smooth transitions between different pages while
          maintaining the SPA architecture.
        </p>
      </div>
    </div>
  );
}
