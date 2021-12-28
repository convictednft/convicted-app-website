import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
// @ts-ignore
import Logo from '../images/logo.png'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const RowContainer = styled.div`
  display: flex;
`

const LinkItem = styled(Link)`
  color: white;
  font-family: Circe, sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 1.25rem 0.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
`

const Navbar = () => {
  return (
    <Container>
      <RowContainer>
        <LinkItem to="/">
          <img src={Logo} style={{ width: '2rem', height: '2rem' }} />
        </LinkItem>
        <LinkItem to="/about">About</LinkItem>
        <LinkItem to="/roadmap">Roadmap</LinkItem>
        <LinkItem to="/whitepaper">Whitepaper</LinkItem>
        <LinkItem to="/staking">Staking</LinkItem>
        <LinkItem to="/liquidity">Liquidity</LinkItem>
      </RowContainer>
      <RowContainer>
        <LinkItem to="/marketplace">Marketplace</LinkItem>
        <LinkItem to="/earn">Play and earn</LinkItem>
      </RowContainer>
    </Container>
  )
}

export default Navbar
