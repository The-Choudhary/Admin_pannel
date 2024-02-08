
export default function Header (){
const bar =()=>{
if(document.getElementById('base').style.width=='20%')
    {
        document.getElementById('base').style.width='0px';
        document.getElementById('bg-color').style.width="100%";

        document.getElementById('bg-color').style.marginLeft="0px";
    document.getElementById('f-base').style.width="77%";
    }
else{
    document.getElementById('base').style.width='20%';
    document.getElementById('bg-color').style.width="80%";

    document.getElementById('bg-color').style.marginLeft="20%";
    document.getElementById('f-base').style.width="71%";
}

};

const mod =()=>{
if(
    document.getElementById('pl').style.height=="fit-content")
{
    document.getElementById('pl').style.height="0px";}
else{
    document.getElementById('pl').style.height="fit-content";}
};

const okk =()=>{
    if(
        document.getElementById('okk').style.height=="fit-content")
    {
        document.getElementById('okk').style.height="0px";}
    else{
        document.getElementById('okk').style.height="fit-content";}
    };
return(
<>
<div className="fold">


<div className="bar2" id="base">
<p ><i class="fa fa-user bar bar1 "><span className="span">Dark Mod</span></i></p>
<p className="slide"><i class="fa fa-tachometer "><span className="span1">Dashboard</span></i></p>
<p className="slide"><i class="fa fa-laptop"><span className="span1">Elements</span></i></p>
<p className="slide" onClick={mod} >
    <i class="fa fa-th"></i>
        <span className="span1">Catagories  
<span className="fafa-iconn">
    <i class="fa fa-angle-down" ></i>
    </span></span></p>
<div className="llo" id="pl">


{/* catagory start */}
<a href="add-catagory"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    Add Catagories</p></a>
   


   

    <a href="add-company"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    View Catagories</p></a>
    
   

</div>


<p className="slide"><i class="fa fa-keyboard-o"><span className="span1">Forms</span></i></p>
<p className="slide" onClick={okk}><i class="fa fa-table"><span className="span1">Tables
<span className="fafa-iconn">
    <i class="fa fa-angle-down" ></i>
    </span></span></i></p>

<div className="llo" id="okk">

<p className="slide2">
    <i class="fa fa-angle-right" ></i>
    <a href="add-catagory">Add Catagories</a></p>


<p className="slide2">
    <i class="fa fa-angle-right" ></i>
    <a href="view-catagory">View Catagories</a></p>


<p className="slide2">
    <i class="fa fa-angle-right" ></i>
    <a href="add-company">Add Company</a></p>


<p className="slide2">
    <i class="fa fa-angle-right" ></i>
    <a href="view-company">View Company</a></p>
</div>


<p className="slide"><i class="fa fa-bar-chart"><span className="span1">Charts</span></i></p>
<p className="slide"><i class="fa fa-file "><span className="span1">Pages</span></i></p>

{/* 404 page */}
<a href="view-catagory">
<p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    Page not found
   </p></a>

<p className="slide"><i class="fa fa-bar-chart"><span className="span1">Add</span></i></p>

<a href="add-company"> 
    <p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
     Add Company
   </p></a>

   <a href="add-catagory"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    Add Catagories</p></a>

    <a href="add-header"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    Add Header</p></a>

    <a href="add-footer"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    Add Footer</p></a>


    <a href="add-product"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    Add Product</p></a>

<p className="slide"><i class="fa fa-bar-chart"><span className="span1">View</span></i></p>

<a href="view-company"> 
    <p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
     View Company
   </p></a>

   <a href="view-catagory"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    View Catagories</p></a>

    <a href="header-view"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    View Header</p></a>

    <a href="footer-view"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    View Footer</p></a>

    <a href="headerlogo-view"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    View Header Logo</p></a>

    <a href="footerlogo-view"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    View Footer Logo</p></a>

    <a href="view-product"><p className="slide2">
<span className="fafa-iconr">
    <i class="fa fa-angle-right" ></i>
    </span>
    View Product</p></a>
</div>



<div className="bg-color" id="bg-color">
   
   <p onClick={bar} className='bar g-base'><i className="fa fa-bars"> </i></p>

<form>

<input className="s-bar" type="text" placeholder="Search"/>


</form>

<div className="f-base" id="f-base">
<a className='bar margin'><i className="fa fa-envelope"><span className="span">Message</span> </i></a>

<a className='bar margin'><i className="fa fa-bell"><span className="span">Notification</span> </i></a>


<a className='bar margin'><img src="##"/><span className="span">Aman</span> </a>


</div>





</div>


</div>
</>

)

}