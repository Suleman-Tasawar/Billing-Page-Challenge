function Menu() {
  return (
    <div>
      <nav>
        <ul className="userProfileMenu">
          <li>
            <div>
              <img src="/Images/square.png" alt="Box" />
            </div>
            <div>General</div>
          </li>
          <li>
            <div>
              <img src="/Images/lock.png" alt="Lock" />
            </div>
            <div>Password</div>
          </li>
          <li>
            <div>
              <img src="/Images/mail.png" alt="Mail" />
            </div>
            <div>Invitation</div>
          </li>
          <li>
            <div>
              <img src="/Images/bil.png" alt="Billing" />
            </div>
            <div>Billing</div>
          </li>
          <li>
            <div>
              <img src="/Images/app.png" alt="App" />
            </div>
            <div>Apps</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
