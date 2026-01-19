import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { AppBase } from "./components/appBase";


export const RoutesHome=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/"  element={<AppBase/>}>
                
                </Route>
            </Routes>
        </Router>
    )
}