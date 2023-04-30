import "./App.scss";
import User from "./components/userInfo";
import Menu from "./components/profileMenu";
import Table from "./components/infoTable";

function App() {
  return (
    <div className="billingPage">
      <div className="leftRedBlock"></div>
      <div className="userDashboard">
        <div className="userProfilePannel">
          <div className="userProfile">
            <div className="userInfo">
              <User />
            </div>

            <div className="userProfileMenu">
              <Menu />
            </div>
          </div>
          <div className="userLogout">
            <ul>
              <li>
                <div>
                  <img src="/Images/logout.png" alt="Logout" />
                </div>
                <div>Logout</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="userInfoPannel">
          <div className="pageTitle">
            <h1>Billing</h1>
          </div>

          <div className="pageInfo">
            <h2>Order History</h2>
            <p>Manage billing information and view receips</p>
          </div>

          <div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
