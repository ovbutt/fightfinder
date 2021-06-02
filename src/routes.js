// import { Spinner } from "@chakra-ui/spinner";
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CoreLayout } from './layouts/index';
import { adminPaths } from './utils/const';
// import { actions } from "slices/app.slice";
// import { path } from "utils/const";
// import Fallback from "components/Fallback";
// import Spinner from "components/Spinner";

const Login = React.lazy(() => import('./pages/auth/Login.jsx'));
const Signup = React.lazy(() => import('./pages/auth/Signup'));
const Admin = React.lazy(() => import('./pages/admin/Home.jsx'));

function Router() {
  // const dispatch = useDispatch();
  const auth = true;
  const { uid } = useSelector((state) => state.firebase.auth);

  // useEffect(() => {
  //   dispatch(actions.authenticate());
  // }, []);

  // if (!checked) {
  //   return (
  //     <div className="app-loader-container">
  //       <Spinner size="4rem" color="white" isLoading />
  //     </div>
  //   );
  // }

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading... </div>}>
        {!auth ? (
          <Switch>
            {/* TODO: Change default route component to user home page */}
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/admin" exact component={Login} />
            {/* <Redirect to="/" /> */}
          </Switch>
        ) : (
          <CoreLayout>
            <Switch>
              <Route exact path={adminPaths.adminHome} component={Admin} />
              {/* <Redirect to={adminPaths.adminHome} /> */}
            </Switch>
          </CoreLayout>
        )}
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
