import { Routes, Route, Outlet } from "react-router-dom";
import Home from './routes/home/home.component';

const App = () => {


    const Shop = () => {
        return(
            <div>
                <h1> I am shop</h1>
            </div>
        )
    }
    return  (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route path="/shop" element = {<Shop />}/>
                <Route  index element = {<Home />} />
            </Route>
        </Routes>
    )
};

export default App;
