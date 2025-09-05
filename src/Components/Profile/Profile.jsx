import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <>
      {" "}
      <div>
        <p>WelCome: {user.userName}</p>
        <p>Password: {user.password}</p>
      </div>
      ;
    </>
  );
}

export default Profile;
