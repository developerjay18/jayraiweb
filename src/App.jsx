import './App.css';
import { Outlet } from 'react-router-dom';
import { Footer } from './components';

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
