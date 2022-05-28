import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="App">
    
      <div className="container">
        <Weather city="Bruxelles"/>
        <Footer />
      </div>
    </div>
  );
}
