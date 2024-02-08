import { useState , useEffect } from "react";
import {useParams} from 'react-router-dom';
import { Baseurl } from "./baseurl";


export default function Edite(id,tt){
    
    const [ EditProduct , setEditProduct ] = useState({})
    // const [ Addcompany , setAddcompany ] = useState(EditProduct)
    
    
    const params = useParams();
    
    var id = params.id;
    
    const Save = () =>{
        
        fetch(`${Baseurl}/edite/${id}`)
        .then(function(response){
            return response.json(); })
            .then(function(data){
                // const item = data;
                
                
                setEditProduct(data); 
                // console.log("okkkkk",data);
            }
            )
            
        }

        
        const Change = async (e)=>{
            
            const id = EditProduct.id;
            const Name = EditProduct.Name;
            const Price = EditProduct.Price;
            
            
            const response = await fetch(`${Baseurl}/updatee/${params.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id , Name  , Price  })
            })
            
            console.log("okkkkkkk",response);
            
        };
        
        useEffect(()=>{
            Save();
        },[]);
        
        // console.log(SignusetData);
        const product=(e)=>{
            setEditProduct(EditProduct=> ({...EditProduct,[e.target.name]: e.target.value }))
            console.log('Addproduct',EditProduct.id); 
        };
        const ma = () =>{
            // console.log(EditProduct[0])
                console.log(EditProduct,"okk")
            return(<> 
    <input  type="text" name="id" value={EditProduct.id} onChange={product}/><br/>

    <input type="text" name="Name" value={EditProduct.Name} onChange={product}/><br/>
    
    <input type="text" name="Price" value={EditProduct.Price} onChange={product}/><br/>

    <a onclick={Change()}>Change</a>

    </>)
};

    return(
        <div>

{ma()}
        </div>
    )
}

