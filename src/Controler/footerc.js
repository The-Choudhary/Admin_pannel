import Header from "../header/formheader";
import {Baseurl} from "../url/baseurl";
import { useState , useEffect } from "react";
export default function Addfooter(){

        const [ Addfooter , setAddfooter ] = useState({})
        const [ img , setimg ] = useState({})

        const Addf = async (e)=>{

                const id = Addfooter.id;
                const footer = Addfooter.mainfooter;
                const name = Addfooter.name;
                const link1 = Addfooter.link1;
                const link2 = Addfooter.link2;
                const photo = img;
                console.log('ffffff',photo); 
        
                const response = await fetch(`${Baseurl}/add-footer`, {
                    method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({id , footer, photo , name ,link1 , link2 })
                });
                console.log("okkkk",response);
                
        };
        
        const footer=(e)=>{
                setAddfooter(Addfooter=> ({...Addfooter,[e.target.name]: e.target.value }))
                console.log('Addcompany',Addfooter);   
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
          console.log(file.name,"done");
              };

    return(
        <>
         <Header/>
         <div className="flex">

        
         <div className="border_footer">

            <h3>Footer links and texts</h3>
<p>
        <p className="heading_footer">Footer Heading</p>
        <input className="add" type="text" placeholder="Footer Heading"onChange={footer} name="mainfooter" />
</p>
<p>
        <p className="heading_footer">Footer name</p>
        <input className="add" type="text" placeholder="Footer name"onChange={footer} name="name"/>
</p>
<p>
        <p className="heading_footer">Footer link</p>
        <input className="add" type="text" placeholder="Footer link"onChange={footer} name="link1"/>
</p>


         </div>

         <div className="border_footer">

            <h3>logo and icons</h3>

<p>
        <p className="heading_footer">Footer Logo</p>
        <input className="add" type="file" placeholder="Footer Logo" onChange={Image} name="image"/>
</p>
<p>
        <p className="heading_footer">Logo link</p>
        <input className="add" type="text" placeholder="Logo link" onChange={footer} name="link2"/>
</p>


         </div>

         </div>
<button onClick={Addf}>Upload</button>
        </>
    )
}