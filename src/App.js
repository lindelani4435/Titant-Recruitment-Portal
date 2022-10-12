import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {dykInputs, newInputs, questionsInputs} from "./data/formSource";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home/> } />
                    <Route path="login" element={<Login/> } />
                    <Route path="questions">
                        <Route index element={<List />} />
                        <Route path=":questionId" element={<Single/>} />
                        <Route path="newQuestion" element={<New inputs = {questionsInputs} title="Add New Questions" />} />
                    </Route>
                    <Route path="advisers">
                        <Route index element={<List />} />
                        <Route path=":adviserId" element={<Single/>} />
                    </Route>
                    <Route path="clients">
                        <Route index element={<List />} />
                        <Route path=":clientId" element={<Single/>} />
                    </Route>
                    <Route path="dyk">
                        <Route index element={<List />} />
                        <Route path=":dykId" element={<Single/>} />
                        <Route path="newDyk" element={<New inputs = {dykInputs} title="Add New Did You Know" />} />
                    </Route>
                    <Route path="news">
                        <Route index element={<List />} />
                        <Route path=":newsId" element={<Single/>} />
                        <Route path="newNews" element={<New inputs = {newInputs} title="Add New News"/>} />
                    </Route>
                </Route>
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
