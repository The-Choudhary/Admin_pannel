import Header from "../header/formheader"
import { useState , useEffect } from "react";
export default function Footerview(){
    const [ FooterData , setFooter ] = useState([])




    const Show = () =>{

        fetch('http://localhost:8082/get-data-footer')
      .then(function(response){
        return response.json(); })
      .then(function(data){
        setFooter(data); 
    })
    }
    const del =(id)=>{
        fetch(`http://localhost:8082/del-data-footer/${id}`,{
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
  
      const footer=()=>{
        return(
          <>
          {FooterData.map((footer)  =>
          <tr className="d-footerview">
          <td className="td-footerview">{`${footer.id}`}</td>
          <td className="td-footerview"> {`${footer.name}`}</td>
          <td className="td-footerview"> adere</td>
          <td className="td-footerview"><p>{`${footer.link}`}</p></td>
<td className="td-company m-mx action"><p onClick={()=>del(footer.id)}>del</p></td>
 <td className="td-company"><a href="#">Pending</a><br/><a href={`http://localhost:3000/edite/${footer.id}`} >update</a></td>
          
          </tr>)}
          </>
        )
      }

    return(
        <>
        <Header/>
        <div className='container'>
    <div className="q-footerview-box">

    <div className="h-footerview">

<th className="th-footerview" >Id</th>
<th className="th-footerview" >Header Name</th>
<th className="th-footerview" >Name</th>
<th className="th-footerview" >link</th>
<th className="th-footerview" >Action</th>
<th className="th-footerview" >Status</th>
</div>




<div >


{footer()}


</div>



</div>



</div>
        </>
    )
}