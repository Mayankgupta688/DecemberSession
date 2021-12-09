import "./InterpolatingDataComponent.css";

export default function PropertyBindingComponent() {
    var conainerId = "red_conainer";
    var imageUrl = "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg";
    
    return (
        <div>
            <div className="card" s>
                <img src={imageUrl} className="card-img-top" alt="" />
                <div id={conainerId} className="card-body">
                    <h5 className="card-title">Mayank Gupta</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input type="button" value="Delete" className="btn btn-primary" />
                </div>
            </div>
        </div>
    )
}