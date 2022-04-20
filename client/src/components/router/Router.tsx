import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from '../Loading';

const LoadingPage = () => (
  <div className="p-4 w-full h-full flex justify-center items-center">
    <Loading />
  </div>
);

const IndexScreen = lazy(() => import('../screens/Index'));
const AboutScreen = lazy(() => import('../screens/About'));
const CreateScreen = lazy(() => import('../screens/Create'));
const ImportScreen = lazy(() => import('../screens/Import'));
const LogInSignUpScreen = lazy(() => import('../screens/LogInSignUp'));
// const Page404Screen = lazy(() => import('~/components/screens/404'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route exact path="/">
            <IndexScreen />
          </Route>
          <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/create">
            <CreateScreen />
          </Route>
          <Route path="/import">
            <ImportScreen />
          </Route>
          <Route path="/login-signup">
            <LogInSignUpScreen />
          </Route>
          {/* <Route path="*">
            <Page404Screen />
          </Route> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
