import './App.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <MyFooter />
    </div>
  );
}

export default App;
