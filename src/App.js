import{useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedBackForm from "./components/FeedbackForm"
import { v4 as uuidv4} from 'uuid'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'


function App() {
  const[feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    //console.log(feedback[0].id)
    setFeedback([newFeedback,...feedback])
    

  }
  const deleteFeedback = (id) =>
  {
    if(window.confirm('Are you sure you want to delete?'))
    {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }  


return(
  <Router>
    <Header/>
      <div className='container'>
        <Routes>
          <Route exact path = '/' 
          element=
          {
          <>
          <FeedBackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/> 
          <AboutIconLink />
          </>
          }>
          </Route>
         <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
  
      </div>
  </Router>
    
      )
  


}

export default App;
