import { useParams, Link } from 'react-router-dom'

export default function BlogPost() {
  const { id } = useParams()

  // Sample post data - will connect to WordPress API later
  const post = {
    id,
    title: "How to import defects from old Jira to Atlassian Jira",
    category: "Jira",
    date: "March 10, 2026",
    author: "John Doe",
    views: "1.2k",
    body: `If you're migrating from an older version of Jira to Atlassian Cloud, 
    you can use the built-in migration tool provided by Atlassian. 
    
    Here's how to get started:
    
    1. Go to your Jira Admin panel
    2. Navigate to System > Backup Manager
    3. Export your project data as XML
    4. In your new Jira instance, go to System > Restore
    5. Upload the XML file and map your fields
    
    Make sure to verify all issue IDs are mapped correctly before finalizing the migration.`,
    replies: [
      {
        author: "Jane Smith",
        date: "March 11, 2026",
        body: "Great guide! I would also recommend backing up your attachments separately before migration."
      },
      {
        author: "Mike Johnson",
        date: "March 12, 2026",
        body: "Does this work for Jira Data Center as well? We are planning a migration soon."
      }
    ]
  }

  return (
    <div className="blog-post-page">
      <div className="container">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> → 
          <span>{post.category}</span> → 
          <span>{post.title.substring(0, 30)}...</span>
        </div>

        {/* Post Header */}
        <div className="post-header">
          <span className="category-tag">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>✍️ {post.author}</span>
            <span>📅 {post.date}</span>
            <span>👁 {post.views}</span>
          </div>
        </div>

        {/* Post Body */}
        <div className="post-body">
          {post.body.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* Replies */}
        <div className="replies-section">
          <h3>💬 {post.replies.length} Replies</h3>
          {post.replies.map((reply, i) => (
            <div key={i} className="reply-card">
              <div className="reply-header">
                <strong>{reply.author}</strong>
                <span>{reply.date}</span>
              </div>
              <p>{reply.body}</p>
            </div>
          ))}
        </div>

        <Link to="/" className="back-btn">← Back to Blog</Link>

      </div>
    </div>
  )
}