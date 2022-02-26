import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="grid-init grid">
      <header className="l-header"><Header /></header>
      <nav className="l-nav"><Nav /></nav>
      <main className="box-init box l-main"><Main /></main>
      <footer className="box-init box l-footer">FOOTER</footer>
    </div>
  );
}

export default App;
