import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';

 const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;