export default function Header({ title }) {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
