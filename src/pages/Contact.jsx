export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="card-title text-center">Contact Us</h1>
        <p className="card-text text-center">
          Have questions about this project? Feel free to reach out!
        </p>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>📧 Email:</strong> info@reactspa.com
          </li>
          <li className="list-group-item">
            <strong>💻 GitHub:</strong>{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </li>
        </ul>
        <p className="text-center mt-3">
          We would love to hear your feedback and suggestions!
        </p>
      </div>
    </div>
  );
}
