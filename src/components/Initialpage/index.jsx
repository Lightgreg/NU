import Rightside from "./Initialpage";
import "./style.css"

function Firstpage({children}) {

  return (
    <section className="all">
    <main className="all-center">
      <div className="all-center-left">
        <h2>NU Kenzie</h2>
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
       {children}
      </div>
      <div className="all-center-right">
        <Rightside></Rightside>
      </div>
      </main>
    </section>
  )
}

export default Firstpage;