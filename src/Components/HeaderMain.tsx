import { Link } from "react-router-dom";
import briefcase from "../assets/images/briefcase.svg";
import user from "../assets/images/user.svg";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import { authActions } from "../store/actions";
import { useEffect } from "react";

function HeaderMain() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.auth);

  const logout = () => {
    dispatch(authActions.signOut());
  };

  useEffect(() => {
    dispatch(authActions.loadUser());
  }, []);
  return (
    <header className="header">
      <div className="header__inner">
        <Link data-test-id="header-logo" to="/" className="header__logo">
          Travel App
        </Link>
        <nav data-test-id="header-nav" className="header__nav">
          <ul className="nav-header__list">
            <li className="nav-header__item" title="Bookings">
              <Link
                data-test-id="header-bookings-link"
                to="/bookings"
                className="nav-header__inner"
              >
                <span className="visually-hidden">Bookings</span>
                <img src={briefcase} alt="bookings" />
              </Link>
            </li>
            <li className="nav-header__item" title="Profile">
              <div
                data-test-id="header-profile-nav"
                className="nav-header__inner profile-nav"
                tabIndex={0}
              >
                <span className="visually-hidden">Profile</span>
                <img src={user} alt="profile" />
                <ul
                  data-test-id="header-profile-nav-list"
                  className="profile-nav__list"
                >
                  <li
                    data-test-id="header-profile-nav-username"
                    className="profile-nav__item"
                  >
                    {userState.user}
                  </li>
                  <li className="profile-nav__item">
                    <Link
                      data-test-id="header-profile-nav-sign-out"
                      to="./sign-in"
                      className="profile-nav__sign-out button"
                      onClick={logout}
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderMain;
