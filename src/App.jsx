import './index.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">S105</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Course</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="container">
        <h1>Welcome to My React Project - S105</h1>
        <h2>CI/CD Cloud DevOps Course</h2>
        <p>This is a simple homepage deployed on GitHub Actions Pages using Vite.</p>
        <h1>Done with Git Pages & Git Actions</h1>
      </div>
    </>
  );
}

export default App;
