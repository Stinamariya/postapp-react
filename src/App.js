import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import TrackPost from './components/TrackPost';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <div>
      <AddPost/>
      <SearchPost/>
      <TrackPost/>
      <ViewPost/>
      
    </div>
  );
}

export default App;
