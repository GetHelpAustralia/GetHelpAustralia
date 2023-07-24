import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";
import Menu from "./components/Menu";
import Error from "./pages/Error";
import GetTheFactsGrey from "./pages/GetTheFactsGrey";
import GetTheFactsIntro from "./pages/GetTheFactsIntro";
import GetTheFactsLaw from "./pages/GetTheFactsLaw";
import Home from "./pages/Home";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Help />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GetTheFactsIntro" element={<GetTheFactsIntro />} />
          <Route path="/GetTheFactsLaw" element={<GetTheFactsLaw />} />
          <Route path="/GetTheFactsGrey" element={<GetTheFactsGrey />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
