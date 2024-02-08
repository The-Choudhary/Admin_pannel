import Header from "../header/formheader"
export default function Addcat(){

return(

    <>
    <Header/>
      
<div className='container'>
    <div className="tbox">
<form className='tablemk'>
Name:<input type="text" placeholder="Name"/><br/>
Password:<input type="Password" placeholder="Password"/><br/>

Re-enter Password:<input type="Password" placeholder="Re-enter Password"/><br/>
</form>
</div>
</div>
        
    
    
    </>
)


}