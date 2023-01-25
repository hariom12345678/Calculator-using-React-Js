import Button from '../UI/Button';
import {useRef} from 'react';
import InputForwardRef from '../UI/Inputforward';

function Section(props){

    const refType=useRef();
    const refpassword=useRef();
    function onclickhandler(){
        console.log(refType.current.id);
        console.log(refpassword.current.id);
        // refType.current.focus();
        refType.current.disabled = true;
        console.log(refpassword.current.value);
    }


    return(<div>
        Email:<InputForwardRef type="text"  ref={refType}  id="email"/>
        Password:<input type="text" ref={refpassword} id="password"/>
        {props.children}
        <Button type="submit" id="login" name="loginsubmit" onclickhandler={onclickhandler}>Login</Button>
    </div>)

}
export default Section;