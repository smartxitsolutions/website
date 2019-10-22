import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>
      <span class="icon fa-cloud" style={{fontSize:`5em`}}></span><br/>
      <span style={{fontSize:`4em`}}>404!</span> Page Not Found
    </h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    Click here to go <Link to="/"><span class="icon fa-home"></span> Home Page</Link>
  </Layout>
)

export default NotFoundPage
