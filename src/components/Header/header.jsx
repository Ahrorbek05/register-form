import '../Header/header.css'

export default  function Header() {
    return (
    <header className="header">
        <div className="container 'header-container' ">
        <a href="#">
            <img src="./src/images/logo.svg" alt="Darkor logo" width={74} height={30}/>
        </a>
        <nav className="nav">
          <ul>
            <li><a href="#vakansiyalar">Vakansiyalar</a></li>
            <li><a href="#kandidatlar">Kandidatlar</a></li>
            <li><a href="#kompaniyalar">Kompaniyalar</a></li>
            <li><a href="#xizmatlar">Xizmatlar</a></li>
            <li><a href="#talim">Ta'lim</a></li>
          </ul>
        </nav>
      <div className="language">
        <select id="select">
            <option value="uzbek">O'zb</option>
            <option value="english">Eng</option>
            <option value="russian">Rus</option>
        </select>
      </div>
      <button className="start-button">Boshlash</button>
        </div>
    </header>
    )
}

