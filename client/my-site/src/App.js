import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';

function App() {
  return (
      <div className="wrapper">
        <header className="header"><Header /></header>
      <div className="main">
        <nav className="nav"><Nav /></nav>
        <main className="info"><Main /></main>
      </div>
        <footer className="footer">FOOTER</footer>
      </div>
  );
}

export default App;
