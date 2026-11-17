import { credentials, featuredProject, profile } from "@/content/portfolio";
import { cn } from "@/lib/cn";
import { FeatureBlock } from "@/components/home/feature-block";

export function Hero() {
  const featured = featuredProject();

  return (
    <section id="top" aria-labelledby="home-heading" className="pt-12">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-10">
        <div className="split-420">
          <div className="hero-copy flex h-full min-w-0 flex-col">
            <p className="text-label font-semibold text-text-3 uppercase">{profile.eyebrow}</p>
            <h1 id="home-heading" className="mt-4 text-display font-bold text-ink">
              {profile.headline}
            </h1>
            <p className="mt-5 max-w-[34em] text-lead text-text-2">{profile.bio}</p>
            <dl className="credentials mt-auto grid grid-cols-3 border-t border-ink pt-4">
              {credentials.map((item, index) => (
                <div
                  key={item.label}
                  className={cn("min-w-0", index > 0 && "border-l border-rule pl-3")}
                >
                  <dt className="text-[13px] leading-snug text-text-3">{item.label}</dt>
                  <dd className="mt-1 text-[13px] leading-snug font-semibold text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          {featured ? <FeatureBlock project={featured} /> : null}
        </div>
      </div>
    </section>
  );
}
