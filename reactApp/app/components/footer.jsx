import React from 'react';
import './footer.scss';


class Footer extends React.Component {
    render() {
        return (
               //<p>FOOTER</p>
            <div>
                <footer id="footer" className="footer-distributed">


                    <section id="footerSection">
                        <div className="footer-left">

                            <p className="footer-links">
                                <a href="#">Home</a>
                                ·
                                <a href="#">Movies</a>
                                ·
                                <a href="#">Help</a>
                                ·
                                <a href="#">About Us</a>
                                ·
                                <a href="#">Contact</a>
                            </p>

                            <p className="footer-company-name">GLBMovies &copy; 2016</p>

                            <div className="footer-icons">

                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-github"></i></a>

                            </div>

                        </div>

                        <div className="footer-right">

                            <p>Contact Us</p>

                            <form action="#" method="post">

                                <input type="text" name="email" placeholder="Email" />
                                <textarea name="message" placeholder="Message"></textarea>
                                <button>Send</button>

                            </form>

                        </div>
                    </section>
                </footer>
            </div>

        );
    }
}


export default Footer;