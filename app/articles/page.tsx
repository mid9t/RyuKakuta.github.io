import type { Metadata } from "next";
import "./articles.css";
import { articles, articleHref, formatArticleDate } from "@/content/articles";
import { BASE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Articles — Ryu Kakuta",
  description:
    "Essays and technical notes on evidential deep learning, uncertainty quantification, and production ML systems.",
};

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default function ArticlesPage() {
  return (
    <div className="articles-page">
      <div className="topbar">
        <a href={`${BASE_PATH}/`}>← Ryu Kakuta</a>
        <a href={`${BASE_PATH}/#projects`}>Projects</a>
      </div>

      <main className="wrap">
        <header className="masthead">
          <div className="eyebrow">Writing</div>
          <h1>Articles</h1>
          <p className="standfirst">
            Notes on uncertainty quantification, evidential deep learning, and the engineering
            required to make research methods hold up in practice.
          </p>
          <div className="byline">
            <span>Ryu Kakuta</span>
            <span>AI Evaluation Engineer</span>
            <span>{articles.length} pieces</span>
          </div>
        </header>

        <section className="feed" aria-label="All articles">
          {articles.map((article) => (
            <a key={article.slug} className="article" href={articleHref(article.slug)}>
              <div className="meta">
                <span className="tag">{article.label}</span>
                <span className="dot" aria-hidden="true" />
                <span>{article.category}</span>
                <span className="dot" aria-hidden="true" />
                <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
              </div>
              <h2 className="title">{article.title}</h2>
              <p className="dek">{article.dek}</p>
              <span className="read">
                Read article <ArrowIcon />
              </span>
            </a>
          ))}
        </section>

        <footer className="site-footer">
          <a href={`${BASE_PATH}/`}>Back to portfolio</a>
          <a href="https://github.com/mid9t" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </footer>
      </main>
    </div>
  );
}
