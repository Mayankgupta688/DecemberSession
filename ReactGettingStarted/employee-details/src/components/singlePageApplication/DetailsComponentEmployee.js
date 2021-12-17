export default function DetailsComponentEmployee(props) {
    return (<div className="card">
        <img src={props.emp.avatar} class="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.emp.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <input type="button" id={props.emp.id} value={"View " + props.emp.name} onClick={props.getEventDetails} className="btn btn-primary" />
        </div>
    </div>)
}