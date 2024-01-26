//bringing in required import from 'react-router-dom' and required custom components
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

function App() {
  return (
    <>
    {/*nav, header, and footer components will render on every page. Outlet allows react router to work for page navigation */}
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