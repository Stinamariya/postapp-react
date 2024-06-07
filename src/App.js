import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import TrackPost from './components/TrackPost';
import ViewPost from './components/ViewPost';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPost/>}/>   
      <Route path='/search' element={<SearchPost/>}/>   
      <Route path='/track' element={<TrackPost/>}/>   
      <Route path='/view' element={<ViewPost/>}/>   
       </Routes>
    </BrowserRouter>
  );
}

export default App;
