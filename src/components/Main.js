import PropTypes from 'prop-types'
import React from 'react'

//Import resources
import pic01 from '../images/pic01.jpg'
import pic05 from '../images/pic05.jpg'
import android from '../images/android.png'
import digital from '../images/digital.png'
import logoDesign from '../images/logo-design.png'
import erp from '../images/erp.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Us</h2>
          <span className="image main">
            <img src={pic01} alt="Overview" />
          </span>
          <p>
            SmartxIT<b>Solutions</b> is one of the best company that offers 
            rapid development for Web Design &amp; Development, Andriod &amp; iOS Application, 
            ERP School Managament Software, E-Commerce Software, Logo Designing and much more.
          </p>
          <p>
            Apart from all the above services we also provide Digital Marketing, Live Training and 
            Development of the latest technologies at a very cheapest rate.
          </p>
          <p>
            For more info feel free to contact at <a href="mailto:smartxitsolution@gmail.com">smartxitsolutions[at]gmail.com</a>
          </p>
          {close}
        </article>

        <article
          id="services"
          className={`${this.props.article === 'services' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic05} alt="Services" />
          </span>
          <div className="container mx-auto px-4 py-2 bg-white rounded text-gray-700">
            <section className="grid m">
              <div className="col col-3 col-align-top">
                <img className="image w-full m-0" src={android} alt=""/>
              </div>
              <div className="content col col-9 col-align-middle">
                <h3 className="text-gray-700">Mobile Apps Development</h3>
                <p>SmartxIt<b className="text-gray-700">Solutions</b> offers customized mobile application for platforms like Android &amp; iOS at a very cheapest rate.</p>
                <p>Also, we provide mobile application training &amp; development classes at our training centre. Interested condidate may further contact for more details.</p>
              </div>
            </section>
            <hr className="my-2 border-gray-500"/>
            <section className="grid">
              <div className="content col col-9 col-align-middle">
                <h3 className="text-gray-700">Web Design &amp; Development</h3>
                <p>SmartxIt<b className="text-gray-700">Solutions</b> is one of the creative website designing company, having expertise team with latest skills for you web development projects.</p>
                <p>We are fully dedicated in provinding best possible services to our valuable customers.</p>
                <p>Our expertise team also provide website training &amp; development course including practical sessions as well as real-world projects.</p>
              </div>
              <div className="col col-3 col-align-top">
                <img className="image w-full m-0" src={digital} alt=""/>
              </div>
            </section>
            <hr className="my-2 border-gray-500"/>
            <section className="grid m">
              <div className="col col-3 col-align-top">
                <img className="image w-full m-0" src={erp} alt=""/>
              </div>
              <div className="content col col-9 col-align-middle">
                <h3 className="text-gray-700">ERP Solutions</h3>
                <p>SmartxIt<b className="text-gray-700">Solutions</b> also offers ERP for School Managament Software. Please contact us for more details.</p>
              </div>
            </section>
            <hr className="my-2 border-gray-500"/>
            <section className="grid">
              <div className="content col col-9 col-align-middle">
                <h3 className="text-gray-700">Logo Design &amp; Much more</h3>
                <p>Logo is one of the essential part of any business oriented company or profile. SmartxIt<b className="text-gray-700">Solutions</b> is the creative and innovative company for logo designing, 
                that offers wide varety of logo for your small business, freelancers, and companies.</p>
                <p>Feel free to contact us at <a className="font-extrabold" href="mailto:smartxitsolutions@gmail.com">SmartxITSolutions[at]gmail.com</a> for more info.</p>
              </div>
              <div className="col col-3 col-align-top">
                <img className="image w-full m-0" src={logoDesign} alt=""/>
              </div>
            </section>
          </div>
          {close}
        </article>

        

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/SmartxIt" rel="noopener noreferrer" target="_blank" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#facebook" rel="noopener noreferrer" target="_blank"  className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/smartxitsolutions" rel="noopener noreferrer" target="_blank"  className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          <ul className="list-none p-0">
            <li><b><i class="fas fa-map-signs"></i> Office Address:</b> Karkarmatta, Near-Radix Hospital, DLW, Varanasi-221004</li>
            <li><b><i class="fas fa-phone"></i> Contact Number:</b> (+91) - 9044872055, <i class="fab fa-whatsapp-square"></i> 7355213016</li>
            <li><b><i class="fas fa-at"></i> Email ID:</b> <a href="mailto:smartxitsolutions@gmail.com">smartxitsolutions@gmail.com</a> </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
