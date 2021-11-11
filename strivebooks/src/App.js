import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import WarningSign from './components/WarningSign'
import BookList from './components/BookList'


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <WarningSign
        content="careful what you search for..." />
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;
