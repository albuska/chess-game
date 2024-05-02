import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader";
import { Header } from "../Header";
// import { Footer } from "../Footer";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default SharedLayout;
