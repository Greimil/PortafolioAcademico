const Aelement = (props) => {
  let { titulo, href, fechaAsignacion, fechaEntrega} = props;
  return (
    <div className="tarea">
      <span>{titulo}</span>
      <span>{fechaAsignacion}</span>
      <span> {fechaEntrega}</span>
      <a  target="_blank"
        rel="noreferrer" href={href}> Enlace </a>
    </div>
  );
};

export default Aelement