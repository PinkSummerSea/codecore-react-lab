import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";
import { Component } from "react";
//import product from "../temData/productData";
import { Product } from '../requests';

// ================== FUNCTIONAL COMPONENT ================

// function ProductShowPage(props){
//     const {product} = props;
//     return(
//         <div className="row">
//             <div className="col-7">
//                 <ProductDetails 
//                 title={product.title}
//                 description={product.description}
//                 created_at={product.created_at}
//                 seller={product.seller}
//                 price={product.price}
//                 image_url={product.image_url} 
//                 />
//             </div>
//             <div className="col-5">
//                 <ReviewList 
//                     list={product.reviews}
//                 />
//             </div>
//         </div>
//     )
// }

class ProductShowPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: {},
            reviews: []
        }
    }

    componentDidMount(){
        Product.show(this.props.match.params.id).then(p => {
            this.setState({product: p, reviews: p.reviews})
            
        })
    }

    render(){
        const {product, reviews} = this.state;
        console.log(product)
        return(
            <div className="row">
                <div className="col-7">
                    <ProductDetails 
                    title={product.title}
                    id={product.id}
                    description={product.description}
                    created_at={product.created_at}
                    // seller={product.seller}
                    price={product.price}
                    image_url={product.image_url} 
                    deleteProduct={()=>{this.setState({product: null})}}
                    />
                </div>
                <div className="col-5">
                    <ReviewList 
                        reviews={reviews}
                    />
                </div>
            </div>
        )
    }
    
    
}

export default ProductShowPage;