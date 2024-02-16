
import {Outlet,useLocation} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  const location=useLocation();
 
  return (
    <>
       <Header/>
      <ToastContainer/>
      <Container className="my-2">
      <Outlet/>
      </Container>
     
    </>
  );
}

export default App;