
const LiElement = (props) =>  {
    let {palabra,descripcion}  = props
    return(
        <li>
            <b className="PalabraMayuscula"> <u>{palabra}</u></b> <p className="DescripcionP" >{descripcion}   </p>  
        </li>
    )

}

export default LiElement