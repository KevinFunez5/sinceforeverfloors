import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <div>
      <Section 
        leftBtnText="Gallery"
        rightBtnText="Services"
        bottomBtnText="Schedule Quote"
        backgroundImg="floors.jpg"
      />
      <Section 
        leftBtnText="Home"
        rightBtnText="Services"
        bottomBtnText="Schedule Quote"
        backgroundImg="floors.jpg"
      />
      <Section 
        leftBtnText="Home"
        rightBtnText="Gallery"
        bottomBtnText="Schedule Quote"
        backgroundImg="floors.jpg"
      />
      <Section 
        leftBtnText="Home"
        rightBtnText="Gallery"
        bottomBtnText="Services"
        backgroundImg="floors.jpg"
      />
    </div>
  )
}

export default Home

const Container = styled.div `
    height: 100vh;
`
