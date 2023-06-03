import { useState } from 'react'
import FreelancerList from '../components/FreelancerList'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import React from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Container>
        <FreelancerList />
      </Container>
    </>
  )
}

export default Home
