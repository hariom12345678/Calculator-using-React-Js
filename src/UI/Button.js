
function Button(props){

    return(<div>
        <button  {...props}  onClick={props.onclickhandler} >{props.children}</button>
    </div>)
}
export default Button;
