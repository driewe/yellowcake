import React from 'react'
import InstagramFeed from './InstagramFeed'
import socialIcons from '../constants/social-icons'
import styles from "../css/footer.module.css"
import './Footer.css'

export default () => (
  <div>
    <div className="taCenter">
    <h3>Have a question about Gardening? I would be more than happy to answer it on  <a href="https://www.quora.com/profile/Rebecca-Rose-356" target="_blan" rel="noopener">profile on Quora</a></h3>
    </div>
    <br />
    <br />
    <h3 className="taCenter">
      Follow Experiential Gardener on Social Media
    </h3>

            <div className={styles.icons} align="center">
                {socialIcons.map((item,index)=>{
                    return (<a 
                        key={index} 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        {item.icon}
                    </a>)
                })}
            </div>

  {/*}<InstagramFeed count="8" />{*/}
    <footer className="footer">



      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>

      </div>
      
    </footer>
  </div>
)
