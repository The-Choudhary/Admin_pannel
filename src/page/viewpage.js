
        import Header from "../header/formheader"
export default function Viewpage(){
    return(
        <>
        <Header/>
        <div className='container'>
    <div className="q-page-box">

    <div className="h-page">

<th className="th-page" >Id</th>
<th className="th-page wid-mn" >Icon</th>
<th className="th-page" >Page Name</th>
<th className="th-page" >Action</th>
<th className="th-page" >Status</th>
</div>




<div >
<tr className="d-page">
<td className="td-page">$1</td>
<td className="td-page m-mn"> </td>
<td className="td-page">Home</td>
<td className="td-page m-mx action"><a href="#">Add</a></td>
<td className="td-page"><a href="#">Pending</a><br/><a href="#">Complete</a></td>

</tr>

<tr className="d-page">
<td className="td-page">$1</td>
<td className="td-page m-mn"> </td>
<td className="td-page">about</td>
<td className="td-page m-mx action"><a href="#">Add</a></td>
<td className="td-page"><a href="#">Pending</a><br/><a href="#">Complete</a></td>

</tr>


</div>



</div>



</div>
        </>
    )
}