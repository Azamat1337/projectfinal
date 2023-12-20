import './css/signup.css';

function Register(){
    return(
<div class="container">
        <div class="title">Registration</div>
        <form action="#">
          <div class="user__details">
            <div class="input__box">
              <span class="details">Full Name</span>
              <input type="text" placeholder="Kazmukhanov Azamat" required/>
            </div>
            <div class="input__box">
              <span class="details">Username</span>
              <input type="text" placeholder="azamatk" required/>
            </div>
            <div class="input__box">
              <span class="details">Email</span>
              <input type="email" placeholder="leg6pmm@bk.ru" required/>
            </div>
            <div class="input__box">
              <span class="details">Phone Number</span>
              <input type="tel" pattern="[7]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="7-777-777-7777" required/>
            </div>
            <div class="input__box">
              <span class="details">Password</span>
              <input type="password" placeholder="********" required/>
            </div>
            <div class="input__box">
              <span class="details">Confirm Password</span>
              <input type="password" placeholder="********" required/>
            </div>
      
          </div>
          <div class="gender__details">
            <input type="radio" name="gender" id="dot-1"/>
            <input type="radio" name="gender" id="dot-2"/>
            <input type="radio" name="gender" id="dot-3"/>
            <span class="gender__title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span>Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span>Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span>Prefer not to say</span>
              </label>
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Register"/>
          </div>
        </form>
      </div>    
    )
}

export default Register;