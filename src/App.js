
import {
  Route,
  BrowserRouter as Router,
  Link,Switch
} from "react-router-dom";
import './App.css';
import Header from  './components/Header';
import Notepage from "./pages/Notepage";
import NotesListPage from './pages/NotesListPage';


function App() {
  return (
    <div className="App">
      My project
      <Header />
      <Route path='/' exact component={NotesListPage} />
      <Route path="/note" component={Notepage} />
    </div>
  );
}

export default App;
