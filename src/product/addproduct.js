import { useState } from "react";
import {Baseurl} from "../url/baseurl"
import Header from "../header/formheader"
export default function Addproduct(){
        const [ Addproduct , setAddproduct ] = useState({})
        const [ img , setimg ] = useState({})

        const Addp = async (e)=>{

                const name= Addproduct.productname;
                const price= Addproduct.price;
                const photo = img;
                console.log('ffffff',photo); 
        
                const response = await fetch(`${Baseurl}/add-product`, {
                    method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({photo,name , price })
                });
                console.log("okkkk",response);
                
        };

        const Product=(e)=>{
                setAddproduct(Addproduct=> ({...Addproduct,[e.target.name]: e.target.value }))
                
                
                console.log('Addcompany',Addproduct); 
                
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


    return(
        <>
          <Header/>
         <div className="border_product">

<p className="adc2">
        <p className="heading_product">Product Photo </p>
        <input className="file" type="file" placeholder="Brand Name" name="image" onChange={Image}/>
</p>

<p>
        <p className="heading_product">Product Name </p>
        <input className="add_product" type="text" placeholder="Product Name" name="productname" onChange={Product}/>
</p>

<p>
        <p className="heading_product">Product Price </p>
        <input className="add_product" type="text" placeholder="Product Price" name="price" onChange={Product}/>
</p>

<p>
        <p className="heading_product"> Material </p>
        <input className="add_product" type="text" placeholder="Material" name="material" onChange={Product}/>
</p>

<p>
        <p className="heading_product"> Length </p>
        <input className="add_product" type="text" placeholder="Length" name="size" onChange={Product}/>
</p>

<p>
        <p className="heading_product"> Height </p>
        <input className="add_product" type="text" name="height" placeholder="Height" onChange={Product}/>
</p>

<p>
        <p className="heading_product">About Product </p>
    <textarea className="add_product desc" placeholder="Description " name="description" onChange={Product}></textarea>
</p>

<button onClick={Addp}>Upload</button>

         </div>
        </>
    )
}