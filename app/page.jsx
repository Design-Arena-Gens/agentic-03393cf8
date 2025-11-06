import Image from "next/image";

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Affiliate Exclusive</span>
          <h1>
            Elevate Your Health Journey with <span>VitalCare</span>
          </h1>
          <p>
            Unlock a science-backed wellness system that combines smart supplements, personalized coaching,
            and lifestyle tracking to help you feel energized, resilient, and in control.
          </p>
          <div className="cta-group">
            <a className="primary-cta" href="#plans">
              Claim Your Wellness Bundle
            </a>
            <a className="secondary-cta" href="#learn-more">
              Explore How It Works
            </a>
          </div>
          <ul className="hero-points">
            <li>Clinically researched nutrients</li>
            <li>Personalized roadmap in 5 minutes</li>
            <li>60-day happiness guarantee</li>
          </ul>
        </div>
        <div className="hero-media">
          <div className="hero-card">
            <div className="hero-card-header">
              <strong>Daily Balance</strong>
              <span>AM Routine</span>
            </div>
            <div className="hero-card-body">
              <ul>
                <li>
                  <span>Vital Charge</span>
                  <span>Vitamin D + Magnesium</span>
                </li>
                <li>
                  <span>Immune Guard</span>
                  <span>Zinc + Elderberry</span>
                </li>
                <li>
                  <span>Focus Flow</span>
                  <span>L-Theanine + B-Vitamins</span>
                </li>
              </ul>
            </div>
            <div className="hero-card-footer">
              <span>Powered by VitalCare Insights™</span>
            </div>
          </div>
        </div>
      </section>

      <section id="learn-more" className="trust">
        <div className="trust-card">
          <h2>Trusted by 180,000+ Health Seekers</h2>
          <p>
            VitalCare integrates with your lifestyle, delivering targeted supplementation, goal tracking, and expert guidance.
          </p>
        </div>
        <div className="social-proof">
          <Image src="/logos/insight.svg" alt="Insight Institute" width={160} height={48} />
          <Image src="/logos/purelabs.svg" alt="Pure Labs" width={160} height={48} />
          <Image src="/logos/bioloom.svg" alt="BioLoom" width={160} height={48} />
          <Image src="/logos/renew.svg" alt="Renew" width={160} height={48} />
        </div>
      </section>

      <section className="benefits">
        <h2>Why VitalCare Works</h2>
        <div className="benefit-grid">
          <article>
            <h3>Personalized Intake Quiz</h3>
            <p>Answer a few questions and receive the perfect supplement stack tailored to your goals and sensitivities.</p>
          </article>
          <article>
            <h3>Clinician-Approved Formulas</h3>
            <p>Every ingredient is third-party tested and dosed for real results, with transparent sourcing you can trust.</p>
          </article>
          <article>
            <h3>Results in 30 Days</h3>
            <p>Track energy, sleep, mood, and immunity in the VitalCare app—stay motivated with measurable progress.</p>
          </article>
          <article>
            <h3>Live Expert Support</h3>
            <p>Get guidance from certified wellness coaches via chat, audio, or video for tailored accountability.</p>
          </article>
        </div>
      </section>

      <section className="feature-highlight">
        <div className="feature-copy">
          <h2>Everything You Need for Complete Wellness</h2>
          <p>
            VitalCare blends precision nutrition, adaptive lifestyle coaching, and seamless tracking into one integrated experience. Leveraging
            AI-driven insights, the platform evolves with you—adjusting dosages, reminders, and recommendations to keep you thriving.
          </p>
          <ul>
            <li>Dynamic supplement packs delivered monthly</li>
            <li>Mobile app with habit reminders and progress tracking</li>
            <li>Weekly wellness sprints customized to your goals</li>
          </ul>
        </div>
        <div className="feature-media">
          <div className="stat-card">
            <span className="stat-value">92%</span>
            <span className="stat-label">Report higher daily energy</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">3.5x</span>
            <span className="stat-label">Improvement in sleep quality</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">98%</span>
            <span className="stat-label">Stay after the first 30 days</span>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Loved by Real People</h2>
        <div className="testimonial-grid">
          <figure>
            <blockquote>
              “VitalCare made it simple to stay consistent. My energy levels are better than they’ve been in years.”
            </blockquote>
            <figcaption>
              <strong>Amelia Taylor</strong>
              <span>Busy professional & mom</span>
            </figcaption>
          </figure>
          <figure>
            <blockquote>
              “The coaching keeps me accountable, and the supplement packs actually taste good. I’m finally sleeping soundly.”
            </blockquote>
            <figcaption>
              <strong>Jordan Lee</strong>
              <span>Fitness enthusiast</span>
            </figcaption>
          </figure>
          <figure>
            <blockquote>
              “I love seeing the data in the app. Watching my stress score improve each week keeps me motivated.”
            </blockquote>
            <figcaption>
              <strong>Maya Chen</strong>
              <span>Product designer</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="plans" className="plans">
        <h2>Choose Your Wellness Path</h2>
        <div className="plan-grid">
          <article>
            <span className="plan-type">Starter</span>
            <h3>$89<span>/month</span></h3>
            <ul>
              <li>Personalized supplement stack</li>
              <li>VitalCare app & habit tracker</li>
              <li>Email check-ins with wellness team</li>
            </ul>
            <a href="https://example.com/starter" className="plan-cta">
              Get Started
            </a>
          </article>
          <article className="featured">
            <span className="plan-type">Complete</span>
            <h3>$129<span>/month</span></h3>
            <ul>
              <li>Everything in Starter</li>
              <li>Live coaching sessions twice monthly</li>
              <li>Advanced hormone & stress testing</li>
            </ul>
            <a href="https://example.com/complete" className="plan-cta">
              Best Value Bundle
            </a>
          </article>
          <article>
            <span className="plan-type">Elite</span>
            <h3>$199<span>/month</span></h3>
            <ul>
              <li>Unlimited coaching support</li>
              <li>Personalized nutrition lab reports</li>
              <li>Exclusive VitalCare community access</li>
            </ul>
            <a href="https://example.com/elite" className="plan-cta">
              Join Elite
            </a>
          </article>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <article>
            <h3>How fast will I see results?</h3>
            <p>Most members report noticeable energy and mood improvements within the first 14 days of consistent use.</p>
          </article>
          <article>
            <h3>Can I cancel at any time?</h3>
            <p>Yes. You can pause or cancel your subscription anytime within the VitalCare app or by contacting support.</p>
          </article>
          <article>
            <h3>Is this safe with my current medications?</h3>
            <p>Your intake quiz and medical history are reviewed to recommend only compatible supplements. Always consult your physician.</p>
          </article>
          <article>
            <h3>Do you ship internationally?</h3>
            <p>We currently ship across North America, the UK, EU, and Australia with localized fulfillment centers.</p>
          </article>
        </div>
      </section>

      <section className="closing-cta">
        <div>
          <h2>Ready to Feel Your Best?</h2>
          <p>
            Join VitalCare through our affiliate partner and secure bonus coaching plus a 15% launch discount on your first month.
          </p>
        </div>
        <a className="primary-cta" href="https://example.com/affiliate">
          Activate My Discount
        </a>
      </section>

      <footer className="footer">
        <div>
          <strong>VitalCare Health</strong>
          <p>Science-driven wellness with human support to help you thrive.</p>
        </div>
        <div>
          <span>© {new Date().getFullYear()} VitalCare Health. All rights reserved.</span>
          <a href="https://example.com/privacy">Privacy</a>
          <a href="https://example.com/terms">Terms</a>
        </div>
      </footer>
    </main>
  );
}
