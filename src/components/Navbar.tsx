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

const LinkItem = styled.a`
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
        <LinkItem href="/">
          <img src={Logo} style={{ width: '2rem', height: '2rem' }} />
        </LinkItem>
        <LinkItem href="/about">About</LinkItem>
        <LinkItem href="/roadmap">Roadmap</LinkItem>
        <LinkItem href="/whitepaper">Whitepaper</LinkItem>
        <LinkItem>Staking</LinkItem>
        <LinkItem>Liquidity</LinkItem>
      </RowContainer>
      <RowContainer>
        <LinkItem>Marketplace</LinkItem>
        <LinkItem>Play and earn</LinkItem>
      </RowContainer>
    </Container>
  )
}

export default Navbar
