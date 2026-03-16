import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-brand">
          <h3>DXESK <span>Blog</span></h3>
          <p>Articles, guides, videos and resources for cloud professionals</p>
        </div>

        <div className="footer-links">
          <h4>Categories</h4>
          <Link to="/category/Blogs">Blogs</Link>
          <Link to="/category/Newsletters">Newsletters</Link>
          <Link to="/category/Videos">Videos</Link>
          <Link to="/category/Resources">Resources</Link>
          <Link to="/category/Podcasts">Podcasts</Link>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a href="https://ww3.dxesk.cloud">Main Site</a>
          <Link to="/">Blog</Link>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 DXESK. All rights reserved.</p>
      </div>
    </footer>
  )
}