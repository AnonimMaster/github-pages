import {Route, Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={< HomePage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
