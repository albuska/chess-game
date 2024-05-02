import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Icons } from "./components/Icons";
import SharedLayout from "./components/SharedLayout/SharedLayout.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const MainGameBoard = lazy(() => import("./pages/MainGameBoard.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

function App() {
  return (
    <div className=" bg-[var(--main-dark-theme-color)] dark:bg-[#060608]">
      <Icons />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="main" element={<MainGameBoard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
