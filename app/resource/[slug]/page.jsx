'use client'

import { useRouter,useParams } from 'next/navigation'
import { Calendar, User, ArrowLeft, Clock, Tag, ChevronRight } from 'lucide-react'
import { BLOG_POSTS } from '../../components/ResourceSection/blogData'
export default function BlogDetail() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug

  const post = BLOG_POSTS.find((p) => p.slug === slug)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: 'var(--color-cyber-base)' }}
      >
        <h1
          className="text-4xl font-bold mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text-primary)',
          }}
        >
          Article Not Found
        </h1>
        <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          The article you are looking for does not exist.
        </p>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-cyan-strong))',
            color: 'var(--color-cyber-base)',
            fontFamily: 'var(--font-body)',
            boxShadow: '0 4px 14px rgba(0,105,217,0.28)',
          }}
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-cyber-base)' }}>

      {/* ── Hero Banner ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: '380px', background: post.image }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.72) 100%)' }}
        />

        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,105,217,0.22) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Breadcrumb + hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-end h-full pb-10 pt-28">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 mb-5 flex-wrap">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-80"
              style={{ color: 'var(--color-neon-cyan)', fontFamily: 'var(--font-body)' }}
            >
              <ArrowLeft size={13} />
              Resources
            </button>
            <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.4)' }} />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>
              {post.category}
            </span>
          </nav>

          {/* Category badge */}
          <div
            className="inline-flex items-center gap-2 mb-4"
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.12)',
              width: 'fit-content',
            }}
          >
            <Tag size={12} style={{ color: 'var(--color-neon-cyan)' }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-neon-cyan)', fontFamily: 'var(--font-body)' }}
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-bold leading-tight mb-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 4.5vw, 48px)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              maxWidth: '780px',
              textShadow: '0 2px 24px rgba(0,0,0,0.5)',
            }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {/* Author avatar placeholder */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.6))',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {post.author.charAt(0)}
              </div>
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body)' }}>
                {post.author}
              </span>
            </div>

            <div className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <Calendar size={13} />
              <span className="text-xs" style={{ fontFamily: 'var(--font-body)' }}>{post.date}</span>
            </div>

            <div className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <Clock size={13} />
              <span className="text-xs" style={{ fontFamily: 'var(--font-body)' }}>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 lg:py-16">

        {/* Intro */}
        <p
          className="text-base sm:text-lg leading-relaxed mb-12"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)',
            borderLeft: '3px solid var(--color-neon-cyan)',
            paddingLeft: '20px',
          }}
        >
          {post.content.intro}
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {post.content.sections.map((section, idx) => (
            <div key={idx}>
              {/* Section number + heading */}
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    background: 'var(--color-neon-cyan-subtle)',
                    color: 'var(--color-neon-cyan)',
                    fontFamily: 'var(--font-display)',
                    border: '1px solid rgba(0,169,217,0.25)',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2
                  className="font-semibold leading-snug"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2.5vw, 22px)',
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {section.heading}
                </h2>
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed pl-12"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.8,
                }}
              >
                {section.body}
              </p>

              {/* Divider — except after last */}
              {idx < post.content.sections.length - 1 && (
                <div
                  className="mt-10"
                  style={{ height: '1px', background: 'var(--border-subtle)' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── Author Card ── */}
        <div
          className="mt-14 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{
            background: 'var(--color-cyber-card)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold shrink-0"
            style={{
              background: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.6))',
              color: '#fff',
              fontFamily: 'var(--font-display)',
            }}
          >
            {post.author.charAt(0)}
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--color-neon-cyan)', fontFamily: 'var(--font-body)' }}>
              Written by
            </p>
            <p className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>
              {post.author}
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
              Expert contributor at MedFlow. Specializing in {post.category.toLowerCase()} for modern healthcare practices.
            </p>
          </div>
        </div>
      </div>

      {/* ── Related Articles ── */}
      <div
        className="relative mt-4 pb-20"
        style={{ borderTop: '1px solid var(--border-subtle)' }}
      >
        {/* Ambient bg */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '400px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(0,105,217,0.06), rgba(10,170,110,0.06))',
            filter: 'blur(100px)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-14">
          <div className="mb-8">
            <div
              className="inline-block px-4 py-2 rounded-xl mb-3"
              style={{ background: 'var(--color-neon-cyan-subtle)' }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-neon-cyan)', fontFamily: 'var(--font-display)' }}
              >
                Continue Reading
              </span>
            </div>
            <h3
              className="font-bold"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 3vw, 30px)',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Related Articles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <article
                key={related.id}
                className="rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--color-cyber-card)',
                  border: '1px solid var(--border-subtle)',
                }}
                onClick={() => router.push(`/resource/${related.slug}`)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,105,217,0.12)'
                  e.currentTarget.style.borderColor = 'var(--color-neon-cyan-soft)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                }}
              >
                {/* Thumbnail */}
                <div className="relative h-40 overflow-hidden" style={{ background: related.image }}>
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider"
                    style={{
                      background: 'rgba(0,0,0,0.55)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--color-neon-cyan)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {related.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h4
                    className="font-semibold mb-2 leading-snug"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '14px',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {related.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed flex-1 mb-4"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                  >
                    {related.excerpt}
                  </p>

                  <div
                    className="flex items-center justify-between pt-3"
                    style={{ borderTop: '1px solid var(--border-subtle)' }}
                  >
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      <User size={12} />
                      <span style={{ fontFamily: 'var(--font-body)' }}>{related.author}</span>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color: 'var(--color-neon-cyan)', fontFamily: 'var(--font-body)' }}
                    >
                      Read
                      <ArrowLeft size={12} className="rotate-180" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}