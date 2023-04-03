import "./style.css"

function Headerx({children}) {
  return (
    <header>
      <h3 className="nu-title">Nu Kenzie</h3>
      {children}
    </header>
  )
}

export default Headerx;