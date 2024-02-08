import Header from "../header/formheader"
export default function Addevent(){
    return(
        <>
        <Header/>

        <div className="border_catagory">


<p>
        <p className="heading_event">Event Name </p>
        <input className="add" type="text" placeholder="Brand Name"/>
</p>
<p className="adc2">
        <p className="heading_event">Event Image </p>
        <input className="file" type="file" placeholder="Brand Name"/>
</p>
<p>
        <p className="heading_event">Discounts  </p>
        <input className="add" type="text" placeholder="Discounts"/>
</p>

<button>Upload</button>


         </div>

         
        </>
    )
}