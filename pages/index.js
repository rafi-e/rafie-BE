import Script from "next/script";
export default function Home(props) {
  return (
    <>
      <div>
        {/* Navigation */}
        <nav className="site-navigation">
          <div className="site-navigation-inner site-container">
            <img src={props.hasil.data[0].header[1].logo.link} alt="site logo" width={100} />
            <div className="main-navigation">
              <ul className="main-navigation__ul">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href={props.hasil.data[0].header[2].navbar.about.link}>
                    {props.hasil.data[0].header[2].navbar.about.title}
                  </a>
                </li>
                <li>
                  <a href={props.hasil.data[0].header[2].navbar.blog.link}>
                    {props.hasil.data[0].header[2].navbar.blog.title}
                  </a>
                </li>
                <li>
                  <a href={props.hasil.data[0].header[2].navbar.social.link}>
                    {props.hasil.data[0].header[2].navbar.social.title}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navigation end */}
        {/* Top banner */}
        <section className="fh5co-top-banner">
          <div className="top-banner__inner site-container">
            <div className="top-banner__image">
              <img
                src={props.hasil.data[0].header[3].banner.left.images}
                alt="author image"
                width={550}
              />
            </div>
            <div className="top-banner__text">
              <div className="top-banner__text-up">
                <span className="brand-span">Hello! I'm</span>
                <h2 className="top-banner__h2">Rafie</h2>
              </div>
              <div className="top-banner__text-down">
                <h2 className="top-banner__h2">Dwie S.</h2>
                <span className="brand-span">Web Developer</span>
              </div>
              <p>Small Think,Big Action And Keep Calm</p>
              <a href="#" className="brand-button">
                Read bio &gt;{" "}
              </a>
            </div>
          </div>
        </section>
        {/* Top banner end */}
        {/* About me */}
        <section className="fh5co-about-me">
          <div className="about-me-inner site-container">
            <article className="portfolio-wrapper">
              <div className="portfolio__img">
                <img
                  src={props.hasil.data[0].body[0].about[1].container[0].left.portfolioImage}
                  className="about-me__profile"
                  alt="about me profile picture"
                />
              </div>
              <div className="portfolio__bottom">
                <div className="portfolio__name">
                  <h2 className="universal-h2">Rafie Dwie Sapoetra</h2>
                </div>
                <p>
                  Rafie Dwie Sapoetra is a short story author and web developer.
                </p>
              </div>
            </article>
            <div className="about-me__text">
              <div className="about-me-slider">
                <div className="about-me-single-slide">
                  <h2 className="universal-h2 universal-h2-bckg">About me</h2>
                  <p>
                    Hello! I'm Rafie, a web developer and a man slighty obsessed
                    for code quality. I’m currently available for freelance work
                    while studying. If you have a project that you want to get
                    started or think you need my help with something, then get
                    in touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-me-bckg" />
        </section>
        {/* About me end */}
        {/* Blog */}
        <section className="fh5co-blog">
          <div className="site-container">
            <h2 className="universal-h2 universal-h2-bckg">My Blog</h2>
            <div className="blog-slider blog-inner">
              <div className="single-blog">
                <div className="single-blog__img">
                  <img
                    src={props.hasil.data[0].body[1].myBlog[0].blog[0].left.image}
                    alt="blog image"
                    width={245}
                    height={325}
                  />
                </div>
                <div className="single-blog__text">
                  <h4>{props.hasil.data[0].body[1].myBlog[0].blog[1].right.subtitle}</h4>
                  <span>{props.hasil.data[0].body[1].myBlog[0].blog[1].right.date}</span>
                  <p>
                  {props.hasil.data[0].body[1].myBlog[0].blog[1].right.text}
                  </p>
                </div>
              </div>
              <div className="single-blog">
                <div className="single-blog__img">
                  <img
                    src={props.hasil.data[0].body[1].myBlog[1].blog[0].left.image}
                    alt="blog image"
                    width={245}
                  />
                </div>
                <div className="single-blog__text">
                  <h4>{props.hasil.data[0].body[1].myBlog[1].blog[1].right.subtitle}</h4>
                  <span>{props.hasil.data[0].body[1].myBlog[1].blog[1].right.date}</span>
                  <p>
                  {props.hasil.data[0].body[1].myBlog[1].blog[1].right.text}
                  </p>
                </div>
              </div>
              <div className="single-blog">
                <div className="single-blog__img">
                  <img
                    src={props.hasil.data[0].body[1].myBlog[2].blog[0].left.image}
                    alt="blog image"
                    width={245}
                  />
                </div>
                <div className="single-blog__text">
                  <h4>{props.hasil.data[0].body[1].myBlog[2].blog[1].right.subtitle}</h4>
                  <span>{props.hasil.data[0].body[1].myBlog[2].blog[1].right.date}</span>
                  <p>
                  {props.hasil.data[0].body[1].myBlog[2].blog[1].right.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog end */}
        {/* Social */}
        <section className="fh5co-social">
          <div className="site-container">
            <div className="social">
              <h5>Follow me!!</h5>
              <div className="social-icons">
                <a href={props.hasil.data[0].body[2].social[1].center[0].github.link} target="_blank">
                  <img
                    src={props.hasil.data[0].body[2].social[1].center[0].github.images}
                    alt="social icon"
                    width={25}
                  />
                </a>
                <a href={props.hasil.data[0].body[2].social[1].center[1].youtube.link} target="_blank">
                  <img
                    src={props.hasil.data[0].body[2].social[1].center[1].youtube.images}
                    alt="social icon"
                  />
                </a>
                <a
                  href={props.hasil.data[0].body[2].social[1].center[2].instagram.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={props.hasil.data[0].body[2].social[1].center[2].instagram.images}
                    alt="social icon"
                    width={25}
                  />
                </a>
              </div>
              <h5>Share it!</h5>
            </div>
          </div>
        </section>
        {/* Social */}
        {/* Footer */}
        <footer className="site-footer">
          <div className="site-container">
            <div className="footer-inner">
              <div className="footer-info">
                <div className="footer-info__left">
                  <img
                    src={props.hasil.data[0].footer[0].left[0].left.image}
                    alt="about me image"
                    width={225}
                  />
                  <p>Read more about me</p>
                </div>
                <div className="footer-info__right">
                  <h5>Get In Touch</h5>
                  <p className="footer-phone">Phone: +62 895-0248-8916</p>
                  <p>Email : srafidwi@gmail.com</p>
                  <div className="social-icons">
                    <a
                      href={props.hasil.data[0].body[2].social[1].center[0].github.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        src={props.hasil.data[0].body[2].social[1].center[0].github.images}
                        alt="social icon"
                        width={25}
                      />
                    </a>
                    <a
                      href={props.hasil.data[0].body[2].social[1].center[1].youtube.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={props.hasil.data[0].body[2].social[1].center[1].youtube.images}
                        alt="social icon"
                      />
                    </a>
                    <a
                      href={props.hasil.data[0].body[2].social[1].center[2].instagram.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={props.hasil.data[0].body[2].social[1].center[2].instagram.images}
                        alt="social icon"
                        width={25}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-contact-form">
                <h5>Contact Form</h5>
                <form className="contact-form">
                  <div className="contact-form__input">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                  <textarea defaultValue={""} />
                  <input
                    type="submit"
                    name="submit"
                    defaultValue="Submit"
                    className="submit-button"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="site-container footer-bottom-inner">
              <p>
                © 2022 Rafi_E | Design by{" "}
                <a
                  href={props.hasil.data[0].footer[2].bottom.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  freehtml5.co
                </a>{" "}
                | All rights Reserved.
              </p>
            </div>
          </div>
        </footer>
        {/* Footer end */}
        <Script src="assets/js/main.js" />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const resp = await fetch('https://berafie.herokuapp.com/');
  const hasil = await resp.json();

  return {
    props: {hasil}, // will be passed to the page component as props
  };
}