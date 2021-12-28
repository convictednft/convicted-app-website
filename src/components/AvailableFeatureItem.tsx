import React from 'react'
import styled from 'styled-components'

const AvailableFeature = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  width: 21.875rem;
  border-radius: 4px;
  margin: 1.5625rem 1rem 1.5625rem 1rem;
  max-height: 27.6825rem;
`

const AvailableFeatureTitle = styled.div`
  font-family: 'Circe', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.125rem;
  letter-spacing: 0em;
  color: #F2F2F2;
  text-align: center;
  text-transform: uppercase;
`

const AvailableFeatureDescription = styled.div`
  font-family: 'Circe', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #C2C2C2;
`

type AvailableFeatureItemProps = {
  title: string
  description: string
  src: any
}

const AvailableFeatureItem = (props: AvailableFeatureItemProps) => {
  return (
    <AvailableFeature>
      <img src={props.src} />
      <AvailableFeatureTitle>{props.title}</AvailableFeatureTitle>
      <AvailableFeatureDescription>{props.description}</AvailableFeatureDescription>
    </AvailableFeature>
  )
}

export default AvailableFeatureItem
