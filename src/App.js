import logo from './logo.svg';
import './App.css';
import GroupOne from './components/GroupOne';
import GroupTwo from './components/GroupTwo';
import GroupThree from './components/GroupThree';
import GroupFour from './components/GroupFour';
import GroupFive from './components/GroupFive';
import GroupSix from './components/GroupSix';
import GroupSeven from './components/GroupSeven';
import GroupEight from './components/GroupEight';
import GroupNine from './components/GroupNine';

function App() {
  return (
    <>
    <h1>Inputs</h1>
    <GroupOne></GroupOne>
    <GroupTwo></GroupTwo>
    <GroupThree></GroupThree>
    <GroupFour></GroupFour>
    <GroupFive></GroupFive>
    <GroupSix></GroupSix>
    <GroupSeven></GroupSeven>
    <GroupEight></GroupEight>
    <GroupNine></GroupNine>
    <p className='footer'>created by <a href="https://www.github.com/alxandrkgb" target="_blank" rel="noopener noreferrer" className='UserName'>Alexander</a> - devChallenges.io</p>
    </>
  );
}

export default App;
