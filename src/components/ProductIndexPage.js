import {Component} from 'react';
//import products from '../temData/productsData';
import ProductDetails from './ProductDetails';
import ProductForm from './ProductForm';
import { Product } from '../requests'


class ProductIndexPage extends Component {
    constructor(props){
        super(props);
        this.state = { products: [] }
    }

    componentDidMount(){
        Product.index().then(fetchedProducts => {
            this.setState({products: fetchedProducts})
        })
    }

    deleteProduct(id){
        this.setState({
            products: this.state.products.filter(p => p.id !== id)
        })
    }

    createNewProduct(params){
        this.setState({
            products: [params, ...this.state.products]
        })
    }

    render(){
        return(
            <div>
                <h1 className='mb-3'>Create a New Product</h1>
                <ProductForm submitForm={(newProductObj) => {this.createNewProduct(newProductObj)}}/>
                {
                    this.state.products.map((p, i) => {
                        
                        return <ProductDetails 
                                key={i}
                                id={p.id}
                                title={p.title}
                                seller_name={p.seller.full_name}
                                price={p.price}
                                deleteProduct={()=>{this.deleteProduct(p.id)}}
                                // image_url={p.image_url} 
                                />   
                     })
                }
            </div>
        )
        
    }
}

export default ProductIndexPage;