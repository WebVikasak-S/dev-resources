import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from '../Loading';

const LoadingPage = () => (
  <div className="p-4 w-full h-full flex justify-center items-center">
    <Loading />
  </div>
);

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route exact path="/">
            {/* <h1>Hello From Router</h1> */}
            <IndexScreen />
          </Route>
          <Route path="*">
            <Page404Screen />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
