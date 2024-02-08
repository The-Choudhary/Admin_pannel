import Header from "../header/formheader"

import { useState , useEffect } from "react";
export default function Headerview(){

    const [ HeaderData , setHeader ] = useState([])


    const Show = () =>{

        fetch('http://localhost:8082/get-data-header')
      .then(function(response){
        return response.json(); })
      .then(function(data){
        setHeader(data); 
    })
    }
    const del =(id)=>{
        fetch(`http://localhost:8082/del-data-header/${id}`,{
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
  
console.log(HeaderData,"oll");

      const header=()=>{
        return(
          <>
          {HeaderData.map((header)  =>
          <tr className="d-headerview">
          <td className="td-headerview">{`${header.id}`}</td>
          <td className="td-headerview"> {`${header.name}`}</td>
          <td className="td-headerview"><p>{`${header.link1}`}</p></td>
<td className="td-company m-mx action"><p onClick={()=>del(header.id)}>del</p></td>
 <td className="td-company"><a href="#">Pending</a><br/><a href={`http://localhost:3000/edite/${header.id}`} >update</a></td>
          
          </tr>)}
          </>
        )
      }

    return(
        <>
        <Header/>
        <div className='container_headerview'>
    <div className="q-headerview-box">

    <div className="h-headerview">

<th className="th-headerview" >Id</th>
<th className="th-headerview" >Header Name</th>
<th className="th-headerview" >link</th>
<th className="th-headerview" >Action</th>
<th className="th-headerview" >Status</th>
</div>




<div >
{header()}



</div>



</div>



</div>
        </>
    )
}