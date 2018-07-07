import * as React from "react"
import styled from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

type Props = {}

export default (props: Props) => {
  return (
    <Container>
      <Header title={"this is header"} />
      <h1>Show timeline in here</h1>
      <Footer title={"this is footer"} />
    </Container>
  )
}

const v: number = 1

const Container = styled.div`
  width: 100%;
  height: 100%;
`
