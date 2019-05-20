import React, { Component } from 'react'

export default class BlogSection extends Component {
  render() {
    return (
      <div>
  <React.Fragment> 
  <section id="blog" className="blog-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Blog
                </h3>
                <p className="subtitle-a">
                  Some blog posts I've done on medium.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <a href="https://medium.com/@HansOnConsult/fix-wordpress-plugin-500-error-s-use-ftp-ssh-to-deactivate-a-plugins-c9764bc4af37">
                    <img src="/static/img/error.png"  className="img-fluid" />
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">WordPress</h6>
                    </div>
                  </div>
                  <h3 className="card-title"><a href="https://medium.com/@HansOnConsult/fix-wordpress-plugin-500-error-s-use-ftp-ssh-to-deactivate-a-plugins-c9764bc4af37">Fix WordPress Plugin 500 Error(s)</a></h3>
                  <p className="card-description">
                    An article talking about fixing 500 errors caused by WordPress Plugins. The article was written during my time at Godaddy and is litterally everything level 1 hosting support does. I also wrote and linked a 
                    <b>  <a href="https://pastebin.com/GEz1N1PU">php script</a></b>
                    that renames folders and checks for blacklisted plugins.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      {/* <img src="img/testimonial-2.jpg" alt className="avatar rounded-circle" /> */}
                    </a><a href="https://medium.com/@HansOnConsult/" className="author">Hans McMurdy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <a href="https://medium.com/@HansOnConsult/poor-mans-guide-to-web-development-ee47a31b6b75"><img src="/static/img/code-header.jpeg"  className="img-fluid" /></a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">Web Development</h6>
                    </div>
                  </div>
                  <h3 className="card-title"><a href="https://medium.com/@HansOnConsult/poor-mans-guide-to-web-development-ee47a31b6b75">Poor Mans guide to Web Development</a></h3>
                  <p className="card-description">
                    A small article to help get me into writting on medium. 
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      {/* <img src="img/testimonial-2.jpg" alt className="avatar rounded-circle" /> */}
                    </a><a href="https://medium.com/@HansOnConsult" className="author">Hans McMurdy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <a href="https://medium.com/@HansOnConsult"><img src="/static/img/bg-code-2.jpeg"  className="img-fluid" /></a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">Other</h6>
                    </div>
                  </div>
                  <h3 className="card-title"><a href="https://medium.com/@HansOnConsult">Follow to see more...</a></h3>
                  <p className="card-description">
                    Others comming soon so follow if you liked the other ones.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      {/* <img src="img/testimonial-2.jpg" alt className="avatar rounded-circle" /> */}
                    </a><a href="https://medium.com/@HansOnConsult" className="author">Hans McMurdy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </React.Fragment>
  <style jsx>{`
  .card-blog .card-body {
    position: relative;
  }
  
  .card-blog .card-category-box {
    position: absolute;
    text-align: center;
    top: -16px;
    left: 15px;
    right: 15px;
    line-height: 25px;
    overflow: hidden;
  }
  
  .card-blog .card-category {
    display: inline-block;
    color: #fff;
    padding: 0 15px 5px;
    overflow: hidden;
    background-color: #0078ff;
    border-radius: 4px;
  }
  
  .card-blog .card-category .category {
    color: #fff;
    display: inline-block;
    text-transform: uppercase;
    font-size: .7rem;
    letter-spacing: .1px;
    margin-bottom: 0;
  }
  
  .card-blog .card-title {
    font-size: 1.3rem;
    margin-top: .6rem;
  }
  
  .card-blog .card-description {
    color: #4e4e4e;
  }
  
  .card-blog .post-author {
    display: inline-block;
  }
  
  .card-blog .post-date {
    color: #4e4e4e;
    display: inline-block;
    float: right;
  }

  .post-box,
  .form-comments,
  .box-comments,
  .widget-sidebar {
    padding: 2rem;
    background-color: #fff;
    margin-bottom: 3rem;
  }
  
  .blog-wrapper .article-title {
    font-size: 1.5rem;
  }
  
  .blog-wrapper .post-meta {
    margin: 1rem 0;
  }
  
  .blog-wrapper .post-meta ul {
    border-left: 4px solid #0078ff;
    margin-top: 1rem;
  }
  
  .blog-wrapper .post-meta ul li {
    display: inline-block;
    margin-left: 15px;
  }
  
  .blog-wrapper .post-meta ul a {
    color: #0078ff;
  }
  
  .blog-wrapper .post-meta ul span {
    color: #1e1e1e;
  }
  
  .blog-wrapper .blockquote {
    border-left: 4px solid #0078ff;
    padding: 18px;
    font-style: italic;
  }

  @media (min-width: 767px) {
    .about-mf .box-pl2 {
      margin-top: 3rem;
      padding-left: 0rem;
    }
  
    .card-blog {
      margin-bottom: 3rem;
    }
  
    .contact-mf .box-pl2 {
      margin-top: 3rem;
      padding-left: 0rem;
    }
  }
  `}</style>
      </div>
    )
  }
}
