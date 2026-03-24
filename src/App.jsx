import './index.css'
import ProfileCard from './components/ProfileCard';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className="div-1">
      <h1>Hello</h1>
      <p className="firstP">This is a direct child</p> {/* this will win unless I add !important */}
      <p id='p2'> how do I access this?</p>
      <div>
        <p className="secondP">A nested para</p>
      </div>

      <ProfileCard/>
      <WelcomeMessage/>


    </div>
  );
}

export default App;


