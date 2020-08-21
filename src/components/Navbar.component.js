import  React from 'react'
import logo from '../Assest/images/logo.png'
export default class Navbar extends React.Component{
    render() {
        return(
            <div>
                <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-white fixed-top p-3" style={{color:"grey"}}>
                    <a className="navbar-brand ml-5" href="#"><img  src={logo} style={{height:'2em'}}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" style={{fontWeight:600}}>
                            <li className="nav-item  ml-2 mr-1">
                                <a className="nav-link text-left ml-5" href="#" style={{color:"pink"}} >Home <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link dropdown-toggle text-left ml-5" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    Company
                                </a>
                                <div className="dropdown-menu py-3 border-0 shadow-lg rounded-lg"  aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item"  href="#">About</a>
                                    <a className="dropdown-item"  href="#">Newsroom</a>
                                    <a className="dropdown-item"  href="#">Careers</a>
                                    <a className="dropdown-item"  href="#">Partners</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link dropdown-toggle text-left ml-5" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    Learn
                                </a>
                                <div className="dropdown-menu py-3 border-0 shadow-lg rounded-lg"  aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item"  href="#">Blog</a>
                                    <a className="dropdown-item"  href="#">Guides</a>
                                    <a className="dropdown-item"  href="#">Help Center</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link dropdown-toggle text-left ml-5" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    Legal
                                </a>
                                <div className="dropdown-menu py-3 border-0 shadow-lg rounded-lg"  aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item"  href="#">Privacy Policy</a>
                                    <a className="dropdown-item"  href="#">Terms of USe</a>
                                    <a className="dropdown-item"  href="#">Trademarks</a>
                                </div>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0 ml-3 d-flex  justify-content-around justify-content-lg-around  mr-3">
                            <button className="btn mx-1 btn-outline-primary my-auto my-sm-2 px-4 py-2" style={{borderRadius:'0 2em 0 2em',fontWeight:600}} type="submit" >Login</button>
                            <button className="btn mx-1 btn-outline-primary my-auto my-sm-2 px-4 py-2" type="submit" style={{borderRadius:'0 2em 0 2em',fontWeight:600}} >Signup</button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}