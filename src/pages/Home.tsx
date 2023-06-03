import FreelancerListComponent from '../components/FreelancerListComponent'
import ContainerComponent from '../components/ContainerComponent'
import NavbarComponen from '../components/NavbarComponent'
import React from 'react'

function Home() {
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
