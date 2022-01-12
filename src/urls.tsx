import { lazy, Suspense} from 'react'
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Layout from './layout';

const Crypto = lazy(() => import('./pages/Crypto'));
const Favorites = lazy(() => import('./pages/Favorites'));
const DetailPage = lazy(() => import('./pages/DetailPage'));
const Page404 = lazy(() => import('./pages/Page404'));
const Modal = lazy(() => import('./components/Modal'));
const FormSign = lazy(() => import('./components/FormSign'));

const AppRouter = () => {
  const location: any = useLocation();
  const navigate: any = useNavigate();
  const state: any = location.state;

  return <>
    <Routes location={state?.backgroundLocation || location}>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<span>Loading...</span>}>
            <Crypto />
          </Suspense>
        }/>
        <Route path="/login" element={
          <Suspense fallback={<span>Loading...</span>} />
        } />
        <Route path="/favorites" element={
          <Suspense fallback={<span>Loading...</span>}>
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          </Suspense>
        } />
        <Route path="/detail-coin/:id" element={
          <Suspense fallback={<span>Loading...</span>}>
            <DetailPage />
          </Suspense>
        } />
        <Route path="*" element={<Suspense fallback={<span>Loading...</span>}><Page404 /></Suspense>} />
      </Route>
    </Routes>
    {state?.backgroundLocation && (
      <Routes>
        <Route path="/login" element={
          <Modal
            state={true}
            changeState={() => navigate(-1)}
            title={'Sign In'}
            showHeader={false}
            showOverlay={true}
            positionModal="center"
            padding={'0px'}
          >
            <FormSign />
          </Modal>
        } />
      </Routes>
    )}
  </>
};

export default AppRouter;
