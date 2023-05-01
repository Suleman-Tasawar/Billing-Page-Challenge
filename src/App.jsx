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
          <div>
            <div>
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

            <div className="userPlan">
              <p>Your Plan</p>
              <h3>Pro Annual</h3>
              <p>Review on Nov.2021</p>
              <button>Cancel Subscription</button>
            </div>
          </div>

          <div>
            <h1>Payment Method</h1>
            <p>Manage billing information and view receipts</p>
            <div className="cardInfo">
              <div>
                <span>
                  <img src="./Images/visa-img.jpg" alt="Visa Card" />
                </span>
                <span>Visa ending in 2055</span>
              </div>
              <div>
                <button className="visaCardButton">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
