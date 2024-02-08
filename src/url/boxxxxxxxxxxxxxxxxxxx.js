import { useState , useEffect } from "react";


export default function Box(){

    const [ SignusetData , setData ] = useState([])

const Save = () =>{

    fetch('http://localhost:8082/get-data')
  .then(function(response){;
    return response.json(); })
  .then(function(data){
    // const item = data;


    setData(data); 
// console.log("okkkkk",data);
}
  )

}

useEffect(()=>{
    Save();
},[]);




return(
<>
<div className="box">
{SignusetData.map((sdata)  =>

<div style= {{background:"yellow" , height: `${sdata.Name}`+"px", width: `${sdata.Comment}`+"px" }}></div>
      
            
        )}
</div>
</>
)
};