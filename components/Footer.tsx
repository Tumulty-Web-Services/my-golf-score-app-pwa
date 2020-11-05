import React from 'react'
import styles from '../styles/Footer.module.css'

const currentYear = new Date().getFullYear()

const Footer = (): JSX.Element => (
  <footer className={`${styles.footer} stories-header`}> 
   <ul className={styles.socialMediaIcons}>
     <li>
       Facebook
     </li>
     <li>
       Twitter
     </li>
     <li>
       Instagram
     </li>      
   </ul>

    <p>Powered by
      {' '}
      <a href="https://tumultywebservices.dev" target="_blank" rel="noopener">
        Tumulty Web Services
      </a>
      {' '}
      ©
      {' '}
      {currentYear}
    </p>
    <style jsx>{`
      footer {
        display: flex;
        flex-direction: center;
        text-align: center;
      }
      p {
        display: block;
        width: 100%;
        text-align: center;
      }

      p a {
        color: #fff;
      }
    `}</style>
  </footer>
)

export default Footer