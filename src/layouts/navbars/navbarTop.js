import React from 'react'

class NavbarTop extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container"> 
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <img src="img/menu.png" className="menu-icon" alt="menu icon"/></button>
                    {/* <!--Logo-->  */}
                    <a className="navbar-brand" href="index.html"><img src="img/logo.png" alt="logo" /></a> </div>
                    
                    {/* <!-- Menu --> */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown active"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
                        <ul className="dropdown-menu">
                            <li><a href="index.html">Home with sidebar</a></li>
                            <li><a href="index-2.html">Home 3 Col Grid</a></li>
                            <li><a href="index-3.html">Home 2 Col Sidebar</a></li>
                        </ul>
                        </li>
                        <li> <a href="about.html">About Us</a> </li>
                        <li> <a href="single-post.html">Single Post</a> </li>
                        <li> <a href="contact.html">Submit Your Query</a> </li>
                    </ul>
                    </div>
                    {/* <!-- /.Menu ends -->  */}
                </div>
                {/* <!-- /.nav ends -->  */}
            </nav>
        )
    }

}

export default NavbarTop;