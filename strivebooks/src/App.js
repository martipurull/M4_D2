import './App.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestReleases from './components/LatestReleases'
import 'bootstrap/dist/css/bootstrap.min.css'

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
