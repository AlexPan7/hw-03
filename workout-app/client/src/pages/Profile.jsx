import { useContext } from 'react';
import { AuthContext } from "../context/auth"

export const Profile = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  const {_id, fullName, email} = user.result

  return (
    <>
      <h1>Your Profile</h1>
      <small>Your id: {_id}</small>
      <p><strong>Your First Last Names:</strong> {fullName}</p>
      <p><strong>Your email:</strong> {email}</p>
    </>
  );
}