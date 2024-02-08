import { useState , useEffect } from "react";
import Header from "../header/formheader";
export default function Viewproduct(){

    const [ ViewproductData , setViewproduct ] = useState([])
    const Show = () =>{

        fetch('http://localhost:8082/get-data-product')
      .then(function(response){
        return response.json(); })
      .then(function(data){
        setViewproduct(data); 
    })
    }
    
    
    const del =(id)=>{
      fetch(`http://localhost:8082/del-dataa/${id}`,{
        method: "DELETE",
      })
      .then(function(response){;
        return response.json(); })
        .then(function(data){
          Show();
    })
    };

    useEffect(()=>{
        Show();
    },[]);

const Producttable=()=>{
  return(
    <>
    {ViewproductData.map((pro)  =>
<tr className="d-product">
<td className="td-product">{`${pro.id}`}</td>
<td className="td-product m-mn"> </td>
<td className="td-product">shoes</td>
<td className="td-product">{`${pro.Name}`}</td>
<td className="td-product">{`${pro.Price}`}</td>
<td className="td-company m-mx action"><p onClick={()=>del(pro.id)}>del</p></td>
 <td className="td-company"><a href="#">Pending</a><br/><a href={`http://localhost:3000/edite/${pro.id}`} >update</a></td>
</tr>

)}
</>
  )
}

var pro = ViewproductData.id;

    return(
        <>
        <Header/>
        <div className='container_product'>
    <div className="q-product-box">

    <div className="h-product">

<th className="th-product" >id</th>
<th className="th-product wid-mn" >Icon</th>
<th className="th-product" >Catagory</th>
<th className="th-product" >product Name</th>
<th className="th-product" >Price</th>
<th className="th-product" >Action</th>
<th className="th-product" >Status</th>
</div>




<div  >

{Producttable()}



</div>



</div>



</div>
        </>
    )
}