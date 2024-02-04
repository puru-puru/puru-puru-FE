import { Suspense, lazy } from "react";
import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
const SignUp = lazy(() => import("../pages/signup/SignUp"));

export const Routes = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ReactRouterRoutes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </ReactRouterRoutes>
    </Suspense>
  );
};
