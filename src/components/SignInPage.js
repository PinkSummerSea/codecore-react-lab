import { Session } from '../requests'

function SignInPage(props) {
    const { onSignIn } = props;
    function handleSubmit(event){
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget)
        console.log(formData)
        const params = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        //console.log(params)
        Session.create(params).then(data => {
            if(data.id){
                onSignIn()
                //Navigate to Index page from the browser
                //We can 'push' on history to manipulate the browser
                //and direct our user to any page in our app
                props.history.push('/questions')
            }
        })
    }

    return (
        <main>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"></label>
                    <input type="text" name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password"/>
                </div>
                <input type="submit" value="Sign In" />
            </form>
        </main>
    )
}

export default SignInPage;
// import {Session} from '../requests';

// function SignInPage (props) {
    
//     const {onSignIn} = props

//     const createSession = (event) => {
//         event.preventDefault();
//         const { currentTarget } = event;
//         const formData = new FormData(currentTarget);
//         console.log(formData)
//         const params = {
//             email: formData.get('email'),
//             password: formData.get('password')
//         }
//         console.log(params)
//         Session.create(params).then(data => {
//             console.log(data)
//             if(data.id) {
//                 console.log(data.id)
//                 onSignIn()
//                 props.history.push("/products")
//             } 
//         })

//     }

   
//     return (
//         <div>
//             <h1>Sign In</h1>
//             <form>
//                 <div className="mb-3" onSubmit={createSession}>
//                     <label className="form-label" htmlFor="email">Email:</label>
//                     <input name="email" type="text" id="email" className="form-control"/>
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label" htmlFor="password">Password:</label>
//                     <input name="password" type="password" id="password" className="form-control"/>
//                 </div>
//                 <input type="submit" value="Sign In" className="btn btn-info mb-5"/>
//             </form>
//         </div>
//     )
    
// }



// export default SignInPage;