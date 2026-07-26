import type { Metadata } from "next";
import { Github } from "lucide-react";
import { profile } from "@/content/portfolio";
import { BASE_PATH } from "@/lib/site";
import { SocialLinks } from "@/components/portfolio/social-links";

export const metadata: Metadata = {
  title: "EEG-Based MDD Classification — Ryu Kakuta",
  description:
    "Project detail: EEG-Based MDD Classification via Effective Connectivity (CNNs).",
};

const NAV_ITEMS = [
  { label: "Home", href: `${BASE_PATH}/` },
  { label: "About", href: `${BASE_PATH}/#about` },
  { label: "Projects", href: `${BASE_PATH}/#projects` },
];

const TECHNOLOGIES = ["Python", "Convolutional Neural Networks", "Granger Causality"];

export default function EegProjectPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <section className="flex min-h-screen flex-col lg:flex-row">
        <aside className="flex flex-col justify-between p-8 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/3 lg:p-12">
          <div>
            <div className="mb-8">
              <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-border ring-offset-2 ring-offset-background lg:h-32 lg:w-32">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  decoding="async"
                />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary lg:text-5xl">
              {profile.name}
            </h1>
            <p className="mb-6 text-xl font-medium text-accent">{profile.role}</p>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              I build and evaluate machine learning systems with an emphasis on reliability, data
              integrity, and failure analysis.
            </p>
            <nav className="mt-16 hidden lg:block">
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className="h-px w-8 bg-muted-foreground transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <SocialLinks className="mt-8 lg:mt-0" />
        </aside>

        <div className="px-8 py-24 lg:ml-[33.333%] lg:px-16">
          <article className="max-w-4xl">
            <h2 className="mb-8 text-sm uppercase tracking-widest text-accent">Project Detail</h2>
            <h1 className="mb-8 text-4xl font-bold text-primary lg:text-5xl">
              EEG-Based MDD Classification via Effective Connectivity (CNNs)
            </h1>
            <div className="mb-8 flex flex-wrap gap-2">
              {TECHNOLOGIES.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-primary">Overview</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              An end-to-end machine learning pipeline for classifying Major Depressive Disorder
              (MDD) from EEG recordings, built around effective-connectivity features and
              convolutional neural networks. The emphasis throughout is on evaluation rigor and
              leakage prevention in a high-stakes clinical setting.
            </p>

            <h3 className="mb-4 text-2xl font-semibold text-primary">Methodology</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              We employed Granger Causality to establish effective connectivity between EEG
              channels, creating connectivity matrices that served as input to Convolutional Neural
              Networks. The CNN architecture was designed to capture spatial patterns in the
              connectivity data while remaining computationally efficient.
            </p>

            <h3 className="mb-4 text-2xl font-semibold text-primary">Key Challenges</h3>
            <ul className="mb-6 list-inside list-disc space-y-2 leading-relaxed text-muted-foreground">
              <li>Preventing data leakage in time-series cross-validation</li>
              <li>Ensuring model interpretability for clinical acceptance</li>
              <li>Handling the high dimensionality of connectivity matrices</li>
              <li>Validating performance on unseen, real-world data</li>
            </ul>

            <h3 className="mb-4 text-2xl font-semibold text-primary">Results</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              The model achieved promising classification accuracy while maintaining
              interpretability. Feature-importance analysis revealed key connectivity patterns that
              aligned with neuroscientific understanding of depression-related changes in brain
              activity.
            </p>

            <h3 className="mb-4 text-2xl font-semibold text-primary">Impact</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              This work demonstrates the potential of machine learning in mental-health
              diagnostics, emphasizing the importance of rigorous evaluation practices in
              high-stakes medical applications.
            </p>

            <div className="mt-12 flex gap-4">
              <a
                href="https://github.com/siddhantamberkar/Physics188-FinalProject/blob/cnn/CNN/cnn.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary transition-colors hover:text-accent"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
