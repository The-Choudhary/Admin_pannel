import Header from "../header/formheader";
import {Baseurl} from "../url/baseurl";
import { useState , useEffect } from "react";
export default function Addheader(){
        const [ Addheader , setAddheader ] = useState({})
        const [ img , setimg ] = useState({})

        const Addheaderr = async (e)=>{

                const id = Addheader.id;
                const name = Addheader.name;
                const link1 = Addheader.link1;
                const link2 = Addheader.link2;
                const icon = Addheader.icon;
                const photo = img;
                // console.log('ffffff'); 
        
                const response = await fetch(`${Baseurl}/add-header`, {
                    method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({id , photo , icon , name ,link1 , link2 })
                });
                console.log("okkkk",response);
                
        };
        
        const header=(e)=>{
                setAddheader(Addheader=> ({...Addheader,[e.target.name]: e.target.value }))
                console.log('Addcompany',Addheader);   
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
            console.log("okkkkk",base64);
          setimg(base64)
              };
              console.log(Addheader,"yes");
    return(
        <>
         <Header/>
         <div className="flex">
            
         <div className="border_header">
            <h3>Header links and texts</h3>
<p>
        <p className="heading_catagory">Header Position</p>
        <input className="add" type="text" placeholder="Header Position"/>
</p>

<p>
        <p className="heading_header">Header name</p>
        <input className="add" type="text" placeholder="header name" onChange={header}  name="name" />
</p>
<p>
        <p className="heading_header">Header link</p>
        <input className="add" type="text" placeholder="header link" onChange={header} name="link1" />
</p>


         </div>


         <div className="border_header">
            <h3>logo and icons</h3>
<p>
        <p className="heading_header">Icon Position</p>
        <input className="add" type="text" placeholder="Position"/>
</p>
<p>
        <p className="heading_catagory">Logo</p>
        <input className="add" type="file" placeholder="Header no." onChange={Image}  name="logo" />
</p>
<h2>or</h2>
<p>
        <p className="heading_catagory">Icon</p>
        <input className="add" type="text" placeholder="Icon link" onChange={header}  name="icon" />
</p>
<p>
        <p className="heading_header">link</p>
        <input className="add" type="text" placeholder="link" onChange={header} name="link2" />
</p>


         </div>

         </div>
<button onClick={Addheaderr}>Upload</button>
        </>
    )
}