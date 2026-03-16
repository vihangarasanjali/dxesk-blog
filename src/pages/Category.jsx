import { useParams, Link } from 'react-router-dom'

export default function Category() {
  const { slug } = useParams()

  const posts = [
    {
      id: 1,
      title: "How to import defects from old Jira to Atlassian Jira",
      excerpt: "A step by step guide on migrating your Jira issues...",
      date: "March 10, 2026",
      author: "John Doe",
      views: "1.2k"
    },
    {
      id: 2,
      title: "Best practices for Jira automation rules",
      excerpt: "Learn how to set up automation rules across projects...",
      date: "March 9, 2026",
      author: "Jane Smith",
      views: "980"
    },
  ]

  return (
    <div className="category-page">
      <div className="container">

        <div className="breadcrumb">
          <Link to="/">Home</Link> → <span>{slug}</span>
        </div>

        <h1 className="category-title">#{slug}</h1>
        <p>{posts.length} articles found</p>

        <div className="posts-grid">
          {posts.map(post => (
            <Link to={`/post/${post.id}`} key={post.id} className="post-card">
              <div className="post-card-body">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="post-meta">
                  <span>✍️ {post.author}</span>
                  <span>📅 {post.date}</span>
                  <span>👁 {post.views}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}