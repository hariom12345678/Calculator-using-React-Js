// // function Display(props){
// //     return(<div>
// //         <table >
// //             <thead>
// //                 <tr>
// //                     <th>#</th>
// //                     <th>Title</th>
// //                     <th>Amount</th>
// //                 </tr>
// //             </thead>
// //             <tbody>
// //             {props.list.map((obj,index)=>{
// //              return(<tr >
// //              <td>{index+1}</td>
// //              <td>{obj.Title}</td>
// //              <td>{obj.Amount}</td>
// //              </tr>)
// //           })}
               
// //             </tbody>
// //         </table>
// //     </div>)
// // }
// // export default Display;




// import React from 'react';
// function Display(props){
//     return(<div>
//         {console.log(props.type)}
//         <h1>{props.list}</h1>
//     </div>)

// // }
// export default React.memo((Display));

// import React from "react";
// function Display(props){
//     return(<div>
//         {console.log(props.type
//             )}
//         <h1>{props.list}</h1>
//     </div>)

// }
// export default React.memo((Display));

// import React from "react";
// function Display(props){
//     return(<div>
//         {console.log(props.type)}
//         <h1>{props.list}</h1>
//     </div>)

// }
// export default React.memo((Display));
import React from "react";
function Display(props){
    return(<div>
        {console.log(props.type)}

        <h1 >{props.list}</h1>
        {/* <h2>{props.hari}</h2> */}
    </div>)

}
export default React.memo((Display));
// export default Display;














