import logo from "./logo.svg";
import styles from "./App.css";
import { FC } from "react";

interface IApp {
    num: number;
}

const App: FC<IApp> = ({ num }): JSX.Element => {
    return (
        <div className={styles.App}>
            <div>{num}</div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
