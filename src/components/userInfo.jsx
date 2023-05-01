function User() {
  return (
    <div className="userProfile">
      <div className="userImg">
        <img src="/Images/user.jpg" />
      </div>
      <div className="userInfo">
        <div>
          <h1>User Name</h1>
        </div>
        <div>
          <p>@UserName</p>
        </div>
      </div>
    </div>
  );
}

export default User;
