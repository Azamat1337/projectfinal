import './css/signin.css';
import photo from './../img/log.png';

function Login() {
    return (
        <div class="container">

            <form action="" class="form">
                <h2>Login In</h2>
                <input type="email" name="email" class="box" placeholder="Enter Email" />
                <input type="password" name="password" class="box" placeholder="Enter Password" />
                <input type="submit" id="submit" value="Sign In" />
            </form>
            <div class="side">
                {/*<img src={photo} alt='photo'/> */}
                {/* <img src="./../img/log.png" /> */}
                
            </div>
        </div>
    )
}

export default Login;