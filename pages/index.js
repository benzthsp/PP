import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Home() { 

  const router = useRouter()
  return (
    
    <div className={styles.container}>
      <img className={styles.position} src="https://i.pinimg.com/736x/13/52/df/1352df430153bcf60f76e1fc1a7d598c.jpg"width ="350" height ="300"/>
      <div className = {styles.nameproject}>
        เว็บแอพพลิเคชั่นตรวจสถานะอุปกรณ์ทางการแพทย์
      </div>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
              onChange={(event)=> console.log(event.target.value)}/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
              onChange={(event)=> console.log(event.target.value)}/>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-outline-success">
              <Link href="/page">
                <a>Log in</a>
              </Link>
            </button>
            <button type="submit" className="btn btn-outline-success">
              <Link href="/Register">
                <a>Sign in</a>
              </Link>
            </button>
          </form>
        </div>
      </div>

    </div>
    
  )
}
