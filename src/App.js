import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header/Header';
import {Footer} from './components/layout/footer/Footer';
import StepperPage from './components/Stepper/StepperPage';
import { AddNewAlert } from './pages/alert/AddNewAlert';
import { NewAlert } from './pages/alert/NewAlert';
import { AlertsManagement } from './pages/alert/AlertsManagement';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Main />} />
            <Route path="/alert-management" element={<AlertsManagement />} />
            <Route path="/new-alert" element={<NewAlert />} />
            <Route path="/add-new-alert" element={<AddNewAlert />} />
            
          </Routes>
        </BrowserRouter>

      {/* <StepperPage /> */}
      {/* <AddNewAlert /> */}
      {/* <NewAlert /> */}      
      
      {/* <AlertsManagement /> */}
      
    </div>
  );
}

export default App;
