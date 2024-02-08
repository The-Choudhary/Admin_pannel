import { useState } from "react";
import Header from "../header/formheader";
import {Baseurl} from "../url/baseurl";
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import fs from 'fs';
export default function Addcompany(){

        const [ Addcompany , setAddcompany ] = useState({})
        const [ imgg , setimg ] = useState({})
const Addc = async (e)=>{

        const id= Addcompany.id;
        const catname= Addcompany.catname;
        const photo = imgg;
        console.log('ffffff',photo); 

        const response = await fetch(`${Baseurl}/add-company`, {
            method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({id , catname  , photo})
        });
        console.log("okkkk",Addcompany);
        
};


const Company=(e)=>{
        setAddcompany(Addcompany=> ({...Addcompany,[e.target.name]: e.target.value }))
        
        
        console.log('Addcompany',Addcompany); 
        
};

const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

const Image = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setimg(base64);
};


// const Imag = (e) =>{
//         setimg(imgg=> ({...imgg,[e.target.name]: e.target.files[0] }))
//        Image();
// };
    return(
        <>


         <Header/>
         <div className="border_company">
<p>
        <p className="heading_company">Catagory Name</p>
        <input className="add" type="text" placeholder="Catagory Name" name="catname" onChange={Company}/>
</p>
<p>
        <p className="heading_company">Brand Name / Company Name</p>
        <input className="add" type="text" placeholder="Brand Name" name="brandname" onChange={Company}/>
</p>
<p className="adc2">
        <p className="heading_company">Brand Logo / Company Logo</p>
        <input className="file" type="file" placeholder="Brand Name" name="logo" onChange={Image}/>
</p>
<button onClick={Addc}>Upload</button>

         </div>
        </>
    )
}