
import Admin from './Admin/admin';
import Addtable from './Admin/addtable';
import Viewtable from './Admin/viewtable';


// {/* company */}
import Addcompany from './company/addcompany';
import Viewcompany from './company/viewcompany';


// {/* product */}
import Addproduct from './product/addproduct';
import Viewproduct from './product/viewproduct';


// {/* pages */}
import Error from './page/error';
import Viewpage from './page/viewpage';
import Review from './page/review';


// {/* controler */}
import Addfooter from './Controler/footerc';
import Addheader from './Controler/headerc';

// {/* controler view */}
import Headerview from './Controler view/headerview';
import Footerview from './Controler view/footerview';
import Headerlogoview from './Controler view/headerlogoview';
import Footerlogoview from './Controler view/footerlogoview';

// events
import Addevent from './collection and category/addevent';
import Edite from './url/updatee';

import {BrowserRouter,Routes,Route} from "react-router-dom";




import Edit from './url/box';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Admin/>}/>

{/* company */}
        <Route path="/add-company" element={<Addcompany/>} />
        <Route path="/view-company" element={<Viewcompany/>} />

{/* product */}
        <Route path="/add-product" element={<Addproduct/>} />
        <Route path="/view-product" element={<Viewproduct/>} />

{/* pages */}
        <Route path="*" element={<Error/>} />
        <Route path="/view-page" element={<Viewpage/>} />
        <Route path="/add-review" element={<Review/>} />
        

{/* controler */}
        <Route path="/add-footer" element={<Addfooter/>} />
        <Route path="/add-header" element={<Addheader/>} />

{/* controler view */}
<Route path="/header-view" element={<Headerview/>} />
<Route path="/headerlogo-view" element={<Headerlogoview/>} />
<Route path="/footer-view" element={<Footerview/>} />
<Route path="/footerlogo-view" element={<Footerlogoview/>} />


        <Route path="/add-table" element={<Addtable/>} />
        <Route path="/view-table" element={<Viewtable/>} />

{/* events */}
        <Route path="/add-catagory" element={<Addevent/>} />




        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/edite/:id" element={<Edite/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
