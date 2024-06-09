
const Signin = () => {
  return (
    <div className="hehe">
            <div className="h1">
                <b>Log In</b>
                <a href="/">Create an Account</a>
            </div>
            <form method="get">
                <div>
                    <label htmlFor="user_email">Email : </label><br />
                    <input type="email" id="user_email" name="user_email" required />
                </div>
                <div>
                    Password : <br/>
                    <input type="password" id="user_pwd" name="user_pwd"required minlength="6" maxlength="15"/>
                </div>
                <a href="#" className="aayein">Forgot Password</a>
                <div class="button">
                    <button type="submit">Submit</button>
                </div>
            </form>
    </div>
  )
}

export default Signin