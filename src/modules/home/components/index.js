import React from 'react'
import IntroHeader from '../../../layouts/commons/introHeader'
import LeftSite from '../../../layouts/commons/leftSite'
import RightSite from '../../../layouts/commons/rightSite'

class Home extends React.Component{

    render(){
        return(
            <div>
                <IntroHeader>
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                        <h1>Modern Blog</h1>
                        <span className="subheading">e-pulse Blog Powered by KonnectCode</span> </div>
                    </div>
                </div>
                </IntroHeader>
                <div className="container">
                    <div className="row">
                        <LeftSite>
                            {/* <!--Post --> */}
                            <div className="post-preview"> <a href="single-post.html">
                                <div className="list-thumb" style={{backgroundImage: 'url(img/news/one.jpeg)'}}>
                                <div></div>
                                </div>
                                <h2 className="post-title"> In consequat lacus nec suscipit ullamcorper. Cras viverra rhoncus est molestie sollicitudin.</h2>
                                </a>
                                <p className="post-meta">Posted by <a href="javascript:void(0)">Author Name</a> on September 24, 2016</p>
                            </div>
                        </LeftSite>

                        <RightSite>
                        <form className="form-inline">
                            <div className="form-group">
                            <input type="text" className="form-control search-btn" placeholder="Search Keyword" />
                            </div>
                            <button type="submit" className="btn btn-default">Search</button>
                        </form>
                        </RightSite>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let el = document.getElementsByClassName('intro-header');
        el[0].setAttribute("style", "background-image: url('img/white-image.jpg')");
    }

}

export default Home;