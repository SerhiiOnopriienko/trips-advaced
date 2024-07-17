import { Link } from "react-router-dom";

function SigninSugnupHeader() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link data-test-id="header-logo" to="/" className="header__logo">
            Travel App
          </Link>
        </div>
      </header>
    </>
  );
}

export default SigninSugnupHeader;
