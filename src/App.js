import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div class="cardContainer">
      <div class="card">
        <h1 class="heading"> Heading </h1>
        <div class="container">
          <img class ="image" src="https://pbs.twimg.com/profile_images/1496512709348798464/-19Uii-a_400x400.jpg"/>
          <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
      <div>
      <button id="newDetailsButton" class="detailsButton"> Details </button>
      </div>
    </div>

    <div class="card">
      <h1 class="heading"> Heading </h1>
      <div class="container">
        <img class ="image" src="https://pbs.twimg.com/profile_images/1496512709348798464/-19Uii-a_400x400.jpg"/>
        <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
      <div>
        <button class="detailsButton"> Details </button>
      </div>
    </div>
  </div>
  <div class="buttons">
    <button class="cloneButton">Clone Page </button>
    <button class="backgroundButton"> Toggle Card Background Color</button>
    <button class="headingButton"> Change Heading Text</button>
    <button class="deleteLastButton"> Delete Last Clone</button>
  </div>
  </div>
  );
}

export default App;
