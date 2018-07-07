import * as React from "react"
import styled from "styled-components"

export interface IFooterProps {
  title: string
}

const Footer: React.SFC<IFooterProps> = props => {
  const { title } = props
  return <FooterContainer>{props.title}</FooterContainer>
}

const FooterContainer = styled.div`
  width: 100%;
  height: 15%;
`

export default Footer
