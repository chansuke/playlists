import * as React from "react"
import styled from "styled-components"

export interface IHeaderProps {
  title: string
}

const Header: React.SFC<IHeaderProps> = props => {
  const { title } = props
  return <HeaderContainer>{props.title}</HeaderContainer>
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 15%;
`

export default Header
