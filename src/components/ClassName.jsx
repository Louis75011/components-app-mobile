import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Components.css'

export default function ClassName() {
  const arrCn = ['cn-bold', 'cn-primary', 'cn-background', 'cn-lead']
  const [showHide, setShowHide] = useState(true)

  const RenderClass = ({ enabled }) => {
    return (
      <div>
        <div className={enabled ? 'cn-enabled' : ''}>Conditionnal Class Active</div>
        <div className={enabled ? '' : 'cn-enabled'}>
          Conditionnal Class Inactive
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="d-flex flex-column">
        <h2 className="text-success m-5 fw-bold">
          Manière de traiter les classes CSS dans un composant React
        </h2>
        <p className={arrCn.join(' ')}>Array of class attributs</p>

        <div className="mx-auto m-2 d-grid gap-3">
          <button
            className="btn btn-warning mx-auto"
            onClick={() => setShowHide(true)}
          >
            Afficher
          </button>
          {showHide ? <h3 text-center>Hello World !</h3> : null}
          <button
            className="btn btn-warning mx-auto"
            onClick={() => setShowHide(false)}
          >
            Cacher
          </button>

          <RenderClass enabled={true} />
        </div>

        <Link className="d-flex" to={'/'}>
          <button className="btn-primary m-5">Retour</button>
        </Link>
      </div>
    </>
  )
}
