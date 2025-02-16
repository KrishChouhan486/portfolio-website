
import Page1 from "./pages/page1.jsx"; 
import Page2 from "./pages/page2.jsx"; // Import Page2 component
import Header from "./components/Header.jsx";
import './App.css'; // Import CSS file
import Page3 from "./pages/page3.jsx";
// import Page4 from "./pages/page4.jsx";
import Page5 from "./pages/page5.jsx";
import Page6 from "./pages/page6.jsx";
import Page7 from "./pages/page7.jsx";

function App() {


  return (
    <div id="main"> 
      <Header /> 
      <Page1 /> 
      <Page2 /> 
      <Page3 />
      {/* <Page4 /> */}
      <Page5 />
      <Page6 />
      <Page7 />
    </div>
  );
}

export default App;