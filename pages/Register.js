import Link from 'next/link'
const Register = () => {
    return (
        <div>
            <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" 
              onChange={(event)=> console.log(event.target.value)}/>
            </div>
            <div className="form-group">
              <label for="exampleInputUsername1">Username</label>
              <input type="username" className="form-control" id="exampleInputUsername1" placeholder="Enter Username" 
              onChange={(event)=> console.log(event.target.value)}/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="Password" className="form-control" placeholder="Enter Password" 
              onChange={(event)=> console.log(event.target.value)}/>
            </div>
            <button type="submit" className="btn btn-outline-success">
              <Link href="/">
                <a>Summit</a>
              </Link>
            </button>
          </form>
        </div>
      </div>
        </div>
    )
}
export default Register