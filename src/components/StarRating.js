import Star from "./Star";

function StarRating(props){
    const arr = new Array(props.max)
    arr.fill('gray')
    for(let i = 0; i< props.current; i++){
        arr[i]='#ebba34'
    };

    return(
        <div>
            {
                arr.map((e, i)=>{
                    return (
                        <Star 
                            key={i}
                            style={{color: arr[i], width:"30px"}}
                        />
                    )
                })
            }
        </div>
    )
}



export default StarRating;