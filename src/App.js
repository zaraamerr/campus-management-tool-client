import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  NewCampusContainer,
  EditCampusContainer
  // EditStudentContainer // added edit student container
} from './components/containers';
// import { EditStudentContainer } from './components/containers/EditStudentContainer';
import EditStudentContainer from './components/containers/EditStudentContainer';


// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/newcampus" component={NewCampusContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        {/* edit student routes */}
        <Route exact path="/student/edit/:id" component={EditStudentContainer} />
        <Route exact path="/editcampus/:id" component={EditCampusContainer} />
      </Switch>        
    </div>
  );
}

export default App;
