import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Container } from "@/components/site/container";

export const metadata: Metadata = {
  title: "EEG-Based MDD Classification — Ryu Kakuta",
  description:
    "Project detail: EEG-Based MDD Classification via Effective Connectivity (CNNs).",
};

const TECHNOLOGIES = ["Python", "Convolutional Neural Networks", "Granger Causality"];

export default function EegProjectPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container className="pt-12 pb-18">
          <article className="max-w-[65ch]">
            <p className="text-meta text-text-3">{TECHNOLOGIES.join(" · ")}</p>
            <h1 className="mt-3 text-feature font-bold text-ink">
              EEG-Based MDD Classification via Effective Connectivity (CNNs)
            </h1>

            <h2 className="mt-10 text-item font-bold text-ink">Overview</h2>
            <p className="mt-3 text-body text-text-2">
              An end-to-end machine learning pipeline for classifying Major Depressive Disorder
              (MDD) from EEG recordings, built around effective-connectivity features and
              convolutional neural networks. The emphasis throughout is on evaluation rigor and
              leakage prevention in a high-stakes clinical setting.
            </p>

            <h2 className="mt-10 text-item font-bold text-ink">Methodology</h2>
            <p className="mt-3 text-body text-text-2">
              We employed Granger Causality to establish effective connectivity between EEG
              channels, creating connectivity matrices that served as input to Convolutional Neural
              Networks. The CNN architecture was designed to capture spatial patterns in the
              connectivity data while remaining computationally efficient.
            </p>

            <h2 className="mt-10 text-item font-bold text-ink">Key Challenges</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-body text-text-2">
              <li>Preventing data leakage in time-series cross-validation</li>
              <li>Ensuring model interpretability for clinical acceptance</li>
              <li>Handling the high dimensionality of connectivity matrices</li>
              <li>Validating performance on unseen, real-world data</li>
            </ul>

            <h2 className="mt-10 text-item font-bold text-ink">Results</h2>
            <p className="mt-3 text-body text-text-2">
              The model achieved promising classification accuracy while maintaining
              interpretability. Feature-importance analysis revealed key connectivity patterns that
              aligned with neuroscientific understanding of depression-related changes in brain
              activity.
            </p>

            <h2 className="mt-10 text-item font-bold text-ink">Impact</h2>
            <p className="mt-3 text-body text-text-2">
              This work demonstrates the potential of machine learning in mental-health
              diagnostics, emphasizing the importance of rigorous evaluation practices in
              high-stakes medical applications.
            </p>

            <p className="mt-10">
              <a
                href="https://github.com/siddhantamberkar/Physics188-FinalProject/blob/cnn/CNN/cnn.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-nav font-medium text-ink"
              >
                View on GitHub
                <ArrowUpRight aria-hidden="true" strokeWidth={2} className="size-4" />
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </p>
          </article>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
