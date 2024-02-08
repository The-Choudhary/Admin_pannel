import { useState , useEffect } from "react";
import Header from "../header/formheader";


export default function Viewcompany(){

    const [ SignusetData , setData ] = useState([])

const Save = () =>{

    fetch('http://localhost:8082/get-data-company')
  .then(function(response){;
    return response.json(); })
  .then(function(data){
    // const item = data;


    setData(data); 
// console.log("okkkkk",data);
}
  )

}


const del =(id)=>{
  
  fetch(`http://localhost:8082/del-data-company/${id}`,{
    method: "DELETE",
  })
  .then(function(response){;
    return response.json(); })
    .then(function(data){
      Save();
    })
  };
  
  
  useEffect(()=>{
      Save();
  },[]);
  
  const Table =()=>{
    return(
      <>
    {SignusetData.map((sdata)  =>
        <tr className="d-company">
        <td className="td-company">{sdata.id}</td>
        <td className="td-company m-mn"> {sdata.img}</td>
        <td className="td-company"> {sdata.name}</td>
        <td className="td-company"> {sdata.Comment}</td>
        <td className="td-company m-mx action"><p onClick={()=>del(sdata.id)}>del</p></td>
        <td className="td-company"><a href="#">Pending</a><br/><a href={`http://localhost:3000/edit/${sdata.id}`} >update</a></td>
        </tr>
            
        )}
        </>
)
};
console.log(SignusetData);
    return(
        
        <>
{/* {SignusetData.map((item) => <p>{item.Id}</p>)} */}

        {console.log("okkkiij000000k",SignusetData)}
        <Header/>
        <div className='container'>
    <div className="q-company-box">

    <table className="h-company">
<tbody>
    <tr>
<th className="th-company" >Id</th>
<th className="th-company wid-mn" >Icon</th>
<th className="th-company" >Catagory Name</th>
<th className="th-company" >Brand Name</th>
<th className="th-company" >Action</th>
<th className="th-company" >Status</th>
</tr>
</tbody>
</table>




<table >
 
{Table()}



</table>



</div>



</div>
        </>
    )
}