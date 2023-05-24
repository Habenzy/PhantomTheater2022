
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

//all admin pages are guarded with this 'PrivateRoute' & wraps these components in App.js
//verifies/renders components if there is a user logged in. if not, user is redirected to /login

export default function PrivateRoute({ component: Component, ...rest }) {
  const { loggedUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedUser ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
