import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};
