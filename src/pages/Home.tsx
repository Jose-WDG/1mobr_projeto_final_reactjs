import { useState } from 'react'
import FreelancerListComponent from '../components/FreelancerListComponent'
import ContainerComponent from '../components/ContainerComponent'
import NavbarComponen from '../components/NavbarComponent'
import React from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponen />
      <ContainerComponent>
        <FreelancerListComponent />
      </ContainerComponent>
    </>
  )
}

export default Home
