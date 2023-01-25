import {useState,useEffect} from 'react';
import axios from 'axios';
function Table(){

// const[getList,setList]=useState([])

const[getList,setList]=useState([]);

useEffect(()=>{
    oninitialdetails();
},[])

const oninitialdetails=()=>{
    axios.get("http://localhost:3000/production1").then((response)=>{
        console.log(response.data);
        setList([...response.data])
    }).catch((err)=>{
        console.log(err);

    })
}
    return(<div>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
   {getList.map((obj,index)=>{
    return(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{obj.Title}</td>
            <td>{obj.Amount}</td>
        </tr>
    )

   })}
   
  </tbody>
</table>
    </div>)

}
export default Table;