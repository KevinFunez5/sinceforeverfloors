import React from 'react'
import styled from 'styled-components'

function Section({leftBtnText, rightBtnText, bottomBtnText, homeBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        {/* <h1>Home Page</h1> */}
      </ItemText>
      <ButtonGroup>
        <LeftButton
        onClick={() => console.log("You clicked on the gallery!")}>
          {leftBtnText} 
        </LeftButton>
        <RightButton
        onClick={() => console.log("You clicked on the services button!")}>
          {rightBtnText}
          {<a href="#top-of-page"><button type="button" class="btn btn-warning">Top of Page</button></a>}
        </RightButton>
        <BottomButton
        onClick={() => console.log("You clicked on the schedule button")}
        >
          {bottomBtnText}
        </BottomButton>
        {/* <HomeButton
        onClick={() => console.log("You clicked on the home button")}
        >
          {homeBtnText}
        </HomeButton> */}
      </ButtonGroup>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-image: url('/images/floors.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`

const RightButton = styled(LeftButton)`
`

const BottomButton = styled(LeftButton)`
`

// const HomeButton = styled(LeftButton)`
// `