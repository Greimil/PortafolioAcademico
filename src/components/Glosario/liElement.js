
const LiElement = (props) =>  {
    let {palabra,descripcion}  = props
    return(
        <li>
            <b className="PalabraMayuscula"> <u>{palabra}</u></b> {descripcion} 
        </li>
    )

}

export default LiElement