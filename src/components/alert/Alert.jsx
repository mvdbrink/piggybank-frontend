import './Alert.css';

function Alert(props)  {
    return (
    <div className="alert alert-success">
        {props.message}
    </div>);
}

export default Alert;