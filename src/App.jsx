//bringing in required import from 'react-router-dom' and required components
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;