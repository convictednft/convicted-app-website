import React from 'react'
import styled from 'styled-components'

const RoadmapTitle = styled.div`
  font-family: Circe, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.375rem;
  line-height: 1.5rem;
  text-align: center;
  color: #EBEBEB;
  margin-bottom: 1.5rem;
`

const RoadmapItemText = styled.div`
  font-family: Circe, sans-serif;
  font-style: normal;
  font-weight: 350;
  font-size: 1.125rem;
  line-height: 1.5rem;
  text-align: center;
  color: #C2C2C2;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`
type Props = {
  title: string
  items: string[]
  margin?: string
}

const RoadmapItem = (props: Props) => {
  return (
    <Container style={{ margin: props.margin }}>
      <RoadmapTitle>{props.title}</RoadmapTitle>
      {
        props.items.map((item) => (
          <RoadmapItemText>{item}</RoadmapItemText>
        ))
      }
    </Container>
  )
}

export default RoadmapItem
