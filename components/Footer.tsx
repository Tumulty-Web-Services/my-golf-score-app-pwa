import React from 'react'
import styles from '../styles/Footer.module.css'


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

    <p>Powered by Tumulty Web Services 2020</p>
  </footer>
)

export default Footer