import './App.css';
import Left from './components/Left';
import Right from './components/Right';

function App() {
    return (
        <div className="container">
            <div className="contents">
                <Left />
            </div>
            <div className="center-bar"></div>
            <div className="contents">
                <Right />
            </div>
        </div>
    );
}

export default App;
