import { ArrowUpRightIcon } from '@/components/icons'
import { blogPosts } from '@/data'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })

export default function BlogSection() {
  return (
    <section className="sec reveal" id="blog" aria-labelledby="blog-h">
      <h2 id="blog-h">Blog</h2>
      <ul className="blog">
        {blogPosts.map((post) => (
          <li key={post.href}>
            <article className="blog-post">
              <div className="blog-main">
                <h3>{post.title}</h3>
                <p className="blog-meta">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>{post.readTime}</span>
                  <span>{post.source}</span>
                </p>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
              <a
                className="pill"
                href={post.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Read "${post.title}" on ${post.source} (opens in a new tab)`}
              >
                Read post<ArrowUpRightIcon />
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
