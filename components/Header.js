export default function Header({ title }) {
  return (
    <header>
      <nav>
        {/* List of navigation links */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <h1 className="title">{title}</h1>
    </header>
  )
}
