import './App.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestReleases from './components/LatestReleases'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <LatestReleases />
      <MyFooter />
    </div>
  );
}

export default App;
