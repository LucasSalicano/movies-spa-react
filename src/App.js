import './App.css';
import {Header} from "./components/Header";
import {Route, BrowserRouter, Link, Routes} from "react-router-dom";
import {Home} from "./views/Home";
import {About} from "./views/About";
import {MovieDetail} from "./views/MovieDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movie/:id/detail" element={<MovieDetail/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
