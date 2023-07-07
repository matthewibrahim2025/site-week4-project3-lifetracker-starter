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
    <div class="Navbar css-15bu2in">
      <div class="css-70qvj9">
        <a class="chakra-link css-14rj303" href="/">
          <img src={codePathLogo} alt="logo" />
        </a>
        <a class="chakra-link css-74uit1" href="/activity">
          Activity
        </a>
        <a class="chakra-link css-74uit1" href="/exercise">
          Exercise
        </a>
        <a class="chakra-link css-74uit1" href="/nutrition">
          Nutrition
        </a>
        <a class="chakra-link css-74uit1" href="/sleep">
          Sleep
        </a>
      </div>
      <div class="css-70qvj9">
        {isLogged ? (
          <div>
            <a class="chakra-link css-spn4bz" href="/">
              <button
                type="button"
                class="chakra-button css-td8gbm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </a>
          </div>
        ) : (
          <div>
            <a class="chakra-link css-spn4bz" href="/login">
              <button type="button" class="chakra-button css-1t9i4zo">
                Sign In
              </button>
            </a>
            <a class="chakra-link css-spn4bz" href="/register">
              <button type="button" class="chakra-button css-td8gbm">
                Register
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
