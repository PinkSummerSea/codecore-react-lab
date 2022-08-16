import { Component } from "react";

class ProductForm extends Component {

    getDataAndSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        this.props.submitForm({
            title: formData.get('title'),
            price: formData.get('price'),
            seller_name: formData.get('seller_name'),
            id: 999
        })
        event.currentTarget.reset()
    }

    render(){
        return (
            <form onSubmit={this.getDataAndSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="title">Product Title:</label>
                    <input name="title" type="text" id="title" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="price">Product Price:</label>
                    <input name="price" type="text" id="price" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="seller_name">Seller's Name:</label>
                    <input name="seller_name" type="text" id="seller_name" className="form-control"/>
                </div>
                <input type="submit" value="Create Product" className="btn btn-info mb-5"/>
            </form>
        )
    }
}

export default ProductForm;