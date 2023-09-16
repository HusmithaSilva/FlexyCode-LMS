import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import SideMenu from "./Side Menu/SideMenu";
import SideMenu from "./Side Menu/SideMenu";
import Instructors from "./Body/Instructors";
import Student from "./Pages/Student";

function App() {
  return (
    // main app starts here
    <div className="App">
      {/* this component renders sidebar with pages */}
      {/* in side bar menu it has the Student page routing  */}
      {/* when student instructor routes hits it directs to student page */}
      {/* student page has Footer header and instructor page itself */}
      {/* header footer instructor pages are different component which coded seperately */}
      <SideMenu />
    </div>
  );
}

export default App;
