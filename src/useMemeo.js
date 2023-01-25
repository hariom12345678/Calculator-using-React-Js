import { useMemo, useState } from "react";

function UseMemo(){

    const[getcounter,setcounter]=useState(0);
    const[getage,setage]=useState(0);

    const onsetcounter=()=>{
        setcounter(getcounter+1);
    }
    const ongetagehandler=()=>{
        setage(getage+1);
    }
    // const complexcalculation=(num)=>{
    //     let n=1000000000
    //     for(let i=0;i<n;i++){

    //     }
    //     return num;
    // }
    const complexcalculation=(num)=>{
        let n=10000000;
        for(let i=0;i<n;i++){

        }
        return num;

    }


    const calculation =useMemo(()=>{
        return complexcalculation(getcounter);
    },[getcounter])
    // // const calculation=complexcalculation(getcounter);
    // const calculation=useMemo(()=>{
    //     return complexcalculation(getcounter);
    // },[getcounter]) 
    
    return(<div>
        <h1>{getcounter}</h1>
        {/* <h2>{c}</h2> */}
        
        <button onClick={onsetcounter}>Counter</button>
        {/* <button onClick={ongetagehandler}></button> */}
        <h2>{calculation}</h2>
    </div>)

}
export default UseMemo;