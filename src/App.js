import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {publicRoutes} from './Routes/routes';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((value, key) => {
          let Layout = HomeTemplate;
          if (value.layout) {
            Layout = value.layout;
          }
          const Page = value.component;
          return <Route 
            path={value.path} 
            element={
              <Layout><Page /></Layout>
            }
            />
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
