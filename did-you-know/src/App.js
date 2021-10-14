import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import ReactLoader from './components/loader';
const Login = lazy(() => import('./pages/login'));
const Home = lazy(() => import('./pages/home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<ReactLoader />}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
