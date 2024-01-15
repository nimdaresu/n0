import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>n0 next n0xt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Get Started" />

      <main>
        <section className="hero">
          <blockquote>
            "Applications starve without data. Applications bloat with bad data. Daily good data"
          </blockquote>
          <cite>N0</cite>
          <img src="/path-to-your-hero-image.jpg" alt="Book cover with design quote" />
        </section>

        <section className="availability">
          <h2>n0 amz/h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Temporibus possimus, aut veniam. Ut minus, possimus quisquam
            cupiditate magnam nisi pariatur...
          </p>
          <button className="hire-us">Hire Us Now</button>
        </section>
      </main>

      <Footer />
    </div>
  )
}
