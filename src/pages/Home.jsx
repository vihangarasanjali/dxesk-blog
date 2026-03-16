import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState('All')

    const featuredPosts = [
        {
            id: 1,
            title: "How to import defects from old Jira to Atlassian Jira",
            excerpt: "A complete step by step guide on migrating your Jira issues using config files with zero data loss...",
            category: "Blogs",
            date: "March 10, 2026",
            author: "John Doe",
            views: "5.1k"
        },
        {
            id: 2,
            title: "Best practices for Jira automation rules across projects",
            excerpt: "Learn how to set up powerful automation rules that work seamlessly across multiple projects...",
            category: "Newsletters",
            date: "March 9, 2026",
            author: "Jane Smith",
            views: "3.4k"
        },
        {
            id: 3,
            title: "DevOps best practices with Jira and Bitbucket",
            excerpt: "Integrating Jira with Bitbucket for a complete DevOps pipeline that scales with your team...",
            category: "Videos",
            date: "March 8, 2026",
            author: "Mike Johnson",
            views: "2.8k"
        },
    ]

    useEffect(() => {
        setPosts([
            {
                id: 1,
                title: "How to import defects from old Jira to Atlassian Jira",
                excerpt: "A step by step guide on migrating your Jira issues using config files...",
                category: "Blogs",
                date: "March 10, 2026",
                author: "John Doe",
                views: "1.2k"
            },
            {
                id: 2,
                title: "Best practices for Jira automation rules",
                excerpt: "Learn how to set up automation rules across company managed projects...",
                category: "Newsletters",
                date: "March 9, 2026",
                author: "Jane Smith",
                views: "980"
            },
            {
                id: 3,
                title: "How to visualize assignee tasks on a timeline",
                excerpt: "Creating timelines from different projects in Jira with filters...",
                category: "Podcasts",
                date: "March 8, 2026",
                author: "Mike Johnson",
                views: "2.1k"
            },
            {
                id: 4,
                title: "Setting up Jira automation for cross project workflows",
                excerpt: "How to configure automation rules that work across multiple projects...",
                category: "Videos",
                date: "March 7, 2026",
                author: "Sarah Lee",
                views: "3.4k"
            },
            {
                id: 5,
                title: "Understanding Jira issue types and workflows",
                excerpt: "A complete guide to issue types, workflows and transitions in Jira...",
                category: "Resources",
                date: "March 6, 2026",
                author: "Tom Wilson",
                views: "5.1k"
            },
            {
                id: 6,
                title: "DevOps best practices with Jira and Bitbucket",
                excerpt: "Integrating Jira with Bitbucket for a complete DevOps pipeline...",
                category: "Videos",
                date: "March 5, 2026",
                author: "Chris Brown",
                views: "2.8k"
            },
        ])
        setLoading(false)
    }, [])

    const categories = ['All', 'Blogs', 'Newsletters', 'Videos', 'Resources', 'Podcasts']

    const filtered = activeCategory === 'All'
        ? posts
        : posts.filter(p => p.category === activeCategory)

    if (loading) return <div className="loading">Loading...</div>

    return (
        <div className="home">

            {/* Hero */}
            <div className="hero">
                <div className="container">
                    <h1>DXESK Blog</h1>
                    <p>Articles, guides, videos and resources for cloud professionals</p>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="search-bar"
                    />
                </div>
            </div>

            {/* Featured Posts */}
            <div className="featured-section">
                <div className="container">
                    <h2 className="section-title"> Featured Posts</h2>
                    <div className="featured-grid">

                        {/* Large featured card */}
                        <Link to={`/post/${featuredPosts[0].id}`} className="featured-card-large">
                            <div className="featured-card-body">
                                <span className="category-tag">{featuredPosts[0].category}</span>
                                <h2>{featuredPosts[0].title}</h2>
                                <p>{featuredPosts[0].excerpt}</p>
                                <div className="post-meta">
                                    <span className="author-meta">
                                        <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${featuredPosts[0].author}`} className="author-avatar" alt={featuredPosts[0].author} />
                                        {featuredPosts[0].author}
                                    </span>
                                    <span>📅 {featuredPosts[0].date}</span>
                                    <span>👁 {featuredPosts[0].views}</span>
                                </div>
                            </div>
                        </Link>

                        {/* Small featured cards */}
                        <div className="featured-cards-small">
                            {featuredPosts.slice(1).map(post => (
                                <Link to={`/post/${post.id}`} key={post.id} className="featured-card-small">
                                    <span className="category-tag">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="post-meta">
                                        <span className="author-meta">
                                            <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.author}`} className="author-avatar" alt={post.author} />
                                            {post.author}
                                        </span>
                                        <span>👁 {post.views}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">

                {/* Categories */}
                <div className="categories">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Posts Grid */}
                <div className="posts-grid">
                    {filtered.map(post => (
                        <Link to={`/post/${post.id}`} key={post.id} className="post-card">
                            <div className="post-card-body">
                                <span className="category-tag">{post.category}</span>
                                <h2>{post.title}</h2>
                                <p>{post.excerpt}</p>
                                <div className="post-meta">
                                    <span className="author-meta">
                                        <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.author}`} className="author-avatar" alt={post.author} />
                                        {post.author}
                                    </span>
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