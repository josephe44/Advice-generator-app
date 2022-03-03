import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceFive, faPause } from '@fortawesome/free-solid-svg-icons'

function AdviceGeneratorCard() {
  const [advice, setAdvice] = useState([])

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setAdvice(data.slip)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="card">
      <h5>Advice #{advice.id}</h5>
      <p>{advice.advice}</p>
      <div className="design">
        <span></span>
        <FontAwesomeIcon icon={faPause} />
        <span></span>
      </div>
      <button onClick={fetchAdvice}>
        <FontAwesomeIcon className="icon" icon={faDiceFive} />
      </button>
    </div>
  )
}

export default AdviceGeneratorCard
