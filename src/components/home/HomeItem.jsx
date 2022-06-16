import { Link } from 'react-router-dom'

export default function HomeItem({ title = '', text = '', link = '' }) {
  return (
    <div className="m-4">
      <h2 className="m-3 fst-italic">-{title}:</h2>
      <Link className="m-2 fw-bolder fs-4" to={`/${link}`}>
        {text}
      </Link>
    </div>
  )
}
