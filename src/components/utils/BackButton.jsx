import { Link } from 'react-router-dom'

export default function BackButton() {
  return (
    <Link className="d-flex" to={'/'}>
      <button className="btn-primary p-2 m-5">Retour</button>
    </Link>
  )
}
