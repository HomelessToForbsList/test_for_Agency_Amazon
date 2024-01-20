import "./App.css";
import { Routes, Route,   } from "react-router-dom";

import { TableComponent } from "./components/Table/Table";



function App() {

  // const url = new URL('https://65a8f947219bfa3718681032.mockapi.io/account')
  // url.searchParams.append('title','hello')
  // url.searchParams.append('title2','hello2')

  //const url = useLocation()
  //console.log('url app; ',url)

  return (
    <>
      <Routes>
        <Route path="/" />
        <Route
          path="/"
          index
          element={<TableComponent key='accounts'  />}
        />
        <Route path='/account/:account/profiles' element={<TableComponent key='profiles' />}/>
        <Route path='/account/:account/profiles/:profile/campaigns' element={<TableComponent key='campaigns' />}/>
      </Routes>
    </>
  );
}

export default App;
