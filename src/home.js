import React from 'react'
import Card from './context'
import logo from './bank.png'


export default function Home() {
  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="Bad Bank Landing Page"
      title="Welcome to the Bank"
      text="You can use this Bank"
      body={(<img src={logo} className="img-fluid" alt="Responsive Image"/>)}
      
    />
  )
}
