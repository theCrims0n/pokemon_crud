
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { List } from './pages/entrenadores/list/List';
import { Register } from './pages/entrenadores/register/Register';
import { Update } from './pages/entrenadores/update/Update';

const App = () => {

  return (
    <body className='fade-in'>
      <Router>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/entrenadores/register' element={<Register />} />
          <Route path='/entrenadores/update/:_id' element={<Update />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
