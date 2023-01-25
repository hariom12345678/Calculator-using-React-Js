import './App.css';
import {useState} from 'react';
function App(){
    const[screen,setscreen]=useState("");
    
    const num=[1,2,3,4,5,6,7,8,9,0,"+","/","-","=","*"];

    const ongetcalculatehandler=(event)=>{
        let btnclciked=event.target.innerHTML;
        if(btnclciked==="="){
            const result=eval(screen);
            setscreen(result);
            return;
        }
        const str=screen+btnclciked;
        setscreen(str);
    }

// const ongetcalculatehandler=(event)=>{
//     let input=event.target.innerHTML;
//     setdata(eval(input));
// }
    // function oninputhandler(event){
    //     alert("onchange");
    // }
    

    return(<div className="container">
        {num.map((obj)=>{
            return(<button onClick={ongetcalculatehandler}>{obj}</button>)
        })}
        {/* <h1>{getdata}</h1> */}
        <div>
            <input type="number"/>
        </div>
        <h1>{screen}</h1>


    </div>)

}
export default App;