import { Routes, Route } from "react-router-dom";
import App from "../App";
import Repo from "../Repos/repo.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/info/:username/:projectname" element={<Repo />} />

      {/* <Route path="*" element={<ErrorPage/>}/> */}
    </Routes>
  );
};

export default AppRouter;
