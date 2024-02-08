import { useState , useEffect } from "react";
import {useParams} from 'react-router-dom';
import { Baseurl } from "./baseurl";


export default function Edit(id,tt){

    const [ EditData , setEditData ] = useState({})
    // const [ Addcompany , setAddcompany ] = useState(EditData)


const params = useParams();
var id = params.id

    const Save = () =>{

        fetch(`${Baseurl}/edit/${id}`)
      .then(function(response){
        return response.json(); })
      .then(function(data){
        // const item = data;
    
    
        setEditData(data[0]); 
    // console.log("okkkkk",data);
    }
      )
    
    }
    
    const Change = async (e)=>{

        const id = EditData.Id;
        const Name = EditData.Name;
        const Comment = EditData.Comment;


        const response = await fetch(`${Baseurl}/update/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id , Name  , Comment  })
        })
        
        console.log("okkkkkkk",response);
        
};

    useEffect(()=>{
        Save();
    },[]);
    
// console.log(SignusetData);
const Company=(e)=>{
    setEditData(EditData=> ({...EditData,[e.target.name]: e.target.value }))
    
    
        console.log('Addcompany',EditData); 
    
    };


const mapi = () =>{
    // console.log(EditData[0])
    return(<> 
    <input  type="text" name="Id" value={EditData.Id} onChange={Company}/><br/>

    <input type="text" name="Name" value={EditData.Name} onChange={Company}/><br/>
    
    <input type="text" name="Comment" value={EditData.Comment} onChange={Company}/><br/>

    <a onclick={Change()}>Change</a>

    </>)
};

console.log(EditData.Id,"okk")
    return(
        <div>

{mapi()}
        </div>
    )
}

