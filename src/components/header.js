import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import tw from "tailwind.macro"

const HeaderWrapper = styled.header`
  ${tw``}
`

const Header = () => (
  <HeaderWrapper>
    <h1>Narciso Rodrigues</h1>
    <p>Broker</p>
  </HeaderWrapper>
)

export default Header
