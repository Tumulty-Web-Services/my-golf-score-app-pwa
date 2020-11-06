import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare'
import styles from '../styles/SocialMediaIcons.module.css'

const SocialMediaIcons = (): JSX.Element => (
  <div
    className={`d-flex justify-content-center ${styles.icons} stories-icons mt-0 pt-0`}
  >
    <Link href="https://facebook.com">
      <a className="mx-2">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
    </Link>
    <Link href="https://twitter.com">
      <a className="mx-2">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
    </Link>
    <Link href="https://instagram.com">
      <a className="mx-2">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
    </Link>
  </div>
)

export default SocialMediaIcons
