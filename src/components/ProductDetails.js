import {Link} from 'react-router-dom';

export default function ProductDetails(props){

    return(
        <div>
            <div className="card mb-5 shadow"> 
                        {props.image_url ? <img src={props.image_url} className="card-img-top" alt="..." /> : ""}
                        
                       
                        <div className="card-body">
                            <h1><Link to={`/products/${props.id}`}>{props.title}</Link></h1>
                            
                            {props.description ? <p>{ props.description}</p> : ""}
                            
                            <p>Price: ${props.price}</p>
                            <p>Seller: {props.seller_name}</p>
                            {props.created_at ? <p>Created at {props.created_at}</p> : ""}
                            <button className='btn btn-warning' onClick={props.deleteProduct}>Delete</button>
                        </div>
             </div>      
        </div>
    )
}