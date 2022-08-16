import ReviewDetails from "./ReviewDetails";
import {Component} from 'react';

class ReviewList extends Component {

    constructor(props){
        super(props)
        this.state = {
            reviews: []
        }
        
    }

    componentDidMount(){
        this.setState({
            reviews: this.props.reviews
        })
        console.log(this.props.reviews)
    }

    // deleteReview(id){
    //     console.log(id)
    //     this.setState(
    //         {
    //             reviews: this.state.reviews.filter(r => r.id !== id)
    //         }
    //     )
    // }



    render(){
        console.log(this.props.reviews);
        return(
            <div>
                <h3 className="mb-3">All Reviews</h3>
                <div>
                    {
                        
                        this.props.reviews.map((r, i) => {
                            console.log(r)
                            return <ReviewDetails 
                                key={i}
                                rating={r.rating}
                                body={r.body}
                                created_at={r.created_at}
                                user={r.user}
                                // deleteReview={()=>{this.deleteReview(r.id)}}
                            />
                        })
                    }
                </div>
            </div>
        )
    }

    
}



export default ReviewList;