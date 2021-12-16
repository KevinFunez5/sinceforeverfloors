import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <div id="top-of-page">
      <Section 
        // id="top-of-page"
        leftBtnText="Gallery"
        rightBtnText="Services"
        bottomBtnText="Schedule Quote"
        backgroundImg="floors.jpg"
      />
    </div>
  )
}

export default Home

const Container = styled.div `
    height: 100vh;
`
