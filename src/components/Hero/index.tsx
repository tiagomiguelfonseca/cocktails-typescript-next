import React from 'react'
import { heroText } from 'src/views/Feature/sports'
import { Container, Text, TextContainer, Title } from './styles'
import SportsIcons from 'src/components/SportsIcons'


export default function Hero() {
    return (
        <React.Fragment>
            <Container>
                <img src={ heroText.imageLeft } alt="" />
                <TextContainer>
                    <Title>{ heroText.title }</Title>
                    <Text>{ heroText.text }</Text>
                </TextContainer>
                <img src={ heroText.imageRight } alt="" />
            </Container>
            <SportsIcons />
        </React.Fragment>

    )
}
