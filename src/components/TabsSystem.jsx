import React, { useState } from 'react'
import BackButton from './utils/BackButton'
import '../style/Components.css'

const TabsSystem = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  const handleFirstTab = () => {
    setActiveTab('tab1')
  }

  const handleSecondTab = () => {
    setActiveTab('tab2')
  }

  const FirstTab = () => {
    return (
      <div className="FirstTab">
        <p>First Tab</p>
        <div className="ts-background ts-first"></div>
      </div>
    )
  }

  const SecondTab = () => {
    return (
      <div className="SecondTab">
        <p>Second Tab</p>
        <div className="ts-background ts-second"></div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-success m-5 fw-bold">Système d'onglets</h2>

      <div className="Tabs">
        <ul className="nav">
          <li className={activeTab === 'tab1' ? 'active' : ''} onClick={handleFirstTab}>
            1
          </li>
          <li className={activeTab === 'tab2' ? 'active' : ''} onClick={handleSecondTab}>
            2
          </li>
        </ul>

        <div className="outlet">{activeTab === 'tab1' ? <FirstTab /> : <SecondTab />}</div>

        <BackButton />
      </div>
    </div>
  )
}

export default TabsSystem
