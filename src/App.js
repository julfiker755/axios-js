import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Adduser from "./Component/Adduser";
import Home from "./Component/Home";
import Update from "./Component/Update";
function App() {
  const routes=createBrowserRouter([
    {
        path:"/a",
        element:<Adduser></Adduser>
    },{
      path:"/h",
      element:<Home></Home>
    },{
      path:'/u/:uid',
      element:<Update></Update>
    }
])
  return (
    <div className="App text-center">
         <RouterProvider router={routes} />
    </div>  
  );
}

export default App;
