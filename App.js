import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/layout/Menu';
import MainRoutes from './components/routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <MainRoutes></MainRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
