import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Home from "./Components/Home";
// import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Layout>
      <Header />
      <Menu/>
      <Home greeting="All about cats 🐱"/>
      {/* <Footer/> */}
    </Layout>

  );
}

export default App;
