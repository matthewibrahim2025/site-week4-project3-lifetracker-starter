import codePathLogo from "/src/assets/codepath.svg";
import "./Navbar.css";

export default function Navbar({ isLogged, setIsLogged }) {

  const handleLogout = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setIsLogged(false);
    console.log(isLogged);
    localStorage.removeItem("id");
    window.location.href = "/";
    
  };

  

  return (
<div class="navbar">
  <div class="navbar-menu">
    <a class="navbar-link" href="/">
      <img src={codePathLogo} alt="logo" />
    </a>
    <a class="navbar-link" href="/activity">
      Activity
    </a>
    <a class="navbar-link" href="/exercise">
      Exercise
    </a>
    <a class="navbar-link" href="/nutrition">
      Nutrition
    </a>
    <a class="navbar-link" href="/sleep">
      Sleep
    </a>
  </div>
  <div class="navbar-menu">
    {isLogged ? (
      <div>
        <a class="navbar-link" href="/">
          <button
            type="button"
            class="navbar-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </a>
      </div>
    ) : (
      <div>
        <a class="navbar-link" href="/login">
          <button type="button" class="navbar-button">
            Sign In
          </button>
        </a>
        <a class="navbar-link" href="/register">
          <button type="button" class="navbar-button">
            Register
          </button>
        </a>
      </div>
    )}
  </div>
</div>

  );
}
