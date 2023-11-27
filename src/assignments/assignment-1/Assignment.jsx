import './1.css'

const Assignment = () => {
    return ( 
        <div className='parent'>
            <div className='child'>
                <div className='child1'>
                    <h2 >LOGIN</h2>
                    <p>or use your account</p>
                    <input placeholder="Email" />
                    <input type="password" placeholder='Password'  />
                    <p>Forgot your password</p>
                    <button>Login</button>
                </div>
                <div className='child2'>
                    <h1>HTML CSS Login Form</h1>
                    <p>This login form is created using pure HTML and CSS.For social icons,FontAwesome is used.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Assignment;