
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,Switch, BrowserRouter
} from "react-router-dom";
import './App.css';
import Header from  './components/Header';
import Notepage from "./pages/Notepage";
import NotesListPage from './pages/NotesListPage';


function App() {
  return (
   <BrowserRouter>
     <div className="container dark">
       <div className="app">
        <Header />
        <Routes>
          <Route path="/"  element={<NotesListPage/>} />
          <Route path="/note/:id" element={<Notepage/>} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
