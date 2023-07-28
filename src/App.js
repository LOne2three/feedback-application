import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedBackForm from "./components/FeedbackForm"
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'


function App() {

return(
  <FeedbackProvider>
  <Router>
    <Header/>
      <div className='container'>
        <Routes>
          <Route exact path = '/' 
          element=
          {
          <>
          <FeedBackForm/>
          <FeedbackStats/>
          <FeedbackList/> 
          <AboutIconLink/>
          </>
          }>
          </Route>
         <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
  
      </div>
  </Router>
  </FeedbackProvider>
    
      )
  


}

export default App;
