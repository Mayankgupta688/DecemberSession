import "./InterpolatingDataComponent.css";

export default function InterpolatingDataComponent() {
    var userName = "Mayank Gupta";
    return (
        <div>
            <div className="card">
                <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{userName}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input type="button" value="Delete" className="btn btn-primary" />
                </div>
            </div>
        </div>
    )
}