import logo from './logo.svg';
import './App.css';
import "./style.css"
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  
  const person = {fullName : " John doe", src : "/John-Doe.jpg"};
  const tab = [{src : "/proj1.jpg",title : "Project 1",desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",linkGit : "Github Link" },
  {src : "/proj2.jpg",title : "Project 2",desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",linkGit : "Github Link"},
  {src : "./proj3.jpg",title : "Project 3",desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",linkGit : "Github Link"},
  {src : "./proj4.jpg",title : "Project 4",desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",linkGit : "Github Link"}];
  const footerS = {copyR : "Copyritghts",company : "GOMYCODE",year : "2021"};
  return (
    <div>
      <NavBar  person = {person}></NavBar>
      <About person = {person}></About>
      <Projects tab = {tab}></Projects>
      <Contact/>
      <Footer footerS = {footerS}></Footer>     
    </div>
  );
}

export default App;
