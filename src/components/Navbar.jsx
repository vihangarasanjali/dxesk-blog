import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          DXESK <span>Blog</span>
        </Link>

        {/* Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/category/blogs">Blogs</Link>
          <Link to="/category/newsletters">Newsletters</Link>
          <Link to="/category/videos">Videos</Link>
          <Link to="/category/resources">Resources</Link>
          <Link to="/category/podcasts">Podcasts</Link>
        </div>

        {/* Search + Login */}
        <div className="nav-actions">
          <input
            type="text"
            placeholder="Search..."
            className="nav-search"
          />
          <button className="login-btn">Login</button>
        </div>

      </div>
    </nav>
  )
}