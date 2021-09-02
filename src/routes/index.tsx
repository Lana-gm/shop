import { Switch, Route, Redirect } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Header from "../components/Header";
import Cart from "../pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

const Routes = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
};

export default Routes;
