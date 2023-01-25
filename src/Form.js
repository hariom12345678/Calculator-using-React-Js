import axios from "axios";
import { useState } from "react";
function Form(props){
    const[getForm,setForm]=useState({
        Title:"",
        Amount:""
      })

    const onChangehandler=(event)=>{
        setForm({...getForm,[event.target.name]:event.target.value})
    }

    const onSubmithandler=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:3000/production1",getForm).then((response)=>{
        props.oninitialdetails();
        setForm({
            Title:"",
            Amount:""
        })
            // setForm([...response.data])
        }).catch(()=>{

        })
    }

    return(<div>
        <form>
  <div className="form-group">
    <label>Title</label>
    <input  className="form-control" placeholder="Enter email" onChange={onChangehandler} name="Title"/>
        </div>
        <div className="form-group">
    <label >Amount</label>
    <input  className="form-control" placeholder="Enter Password" onChange={onChangehandler} name="Amount"/>
        </div>
       
  <button type="submit" className="btn btn-primary" onClick={onSubmithandler}>Submit</button>
</form>

    </div>)
}
export default Form;