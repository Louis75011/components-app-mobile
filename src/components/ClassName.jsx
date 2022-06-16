import { Link } from 'react-router-dom'
import '../style/Components.css'

export default function ClassName() {
  const arrCn = ['cn-bold', 'cn-primary', 'cn-background', 'cn-lead']

  const TrueRender = ({ enabled }) => {
    return (
      <div className={enabled ? 'cn-enabled' : ''}>Conditionnal Class True</div>
    )
  }

  const FalseRender = ({ enabled }) => {
    return (
      <div className={enabled ? 'cn-enabled' : null}>
        Conditionnal Class False
      </div>
    )
  }

  return (
    <>
      <div>
        <h2 className="m-4">
          Manière de traiter les classes CSS dans un composant React
        </h2>
        <p className={arrCn.join(' ')}>Array of class attributs</p>

        <TrueRender enabled={true} />
        <FalseRender enabled={false} />

        <Link className="d-flex" to={'/'}>
          <button className="btn-primary m-5">Retour</button>
        </Link>
      </div>
    </>
  )
}
