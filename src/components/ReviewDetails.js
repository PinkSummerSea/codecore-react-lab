import StarRating from "./StarRating";


export default function ReviewDetails(props) {
    return(
        <div className="mb-4 card shadow">
            <div className="card-body">
               
                <div className="mb-3">
                <StarRating 
                    max={5}
                    current={props.rating}
                    
                />
                </div>
                <p>{props.body}</p>
                
                <p>By {props.user.first_name}</p>
                {props.created_at ? <small>Posted on {props.created_at}</small> : ""}
                <button className="btn btn-warning" onClick={props.deleteReview}>Delete</button>
            </div>
        </div>
    )
}