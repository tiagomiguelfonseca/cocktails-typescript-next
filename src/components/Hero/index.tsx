import React from 'react'
import { heroText } from '../../features/menu/sports'
import { Container, Text, TextContainer, Title } from './styles'
import AllSportsBar from '../AllSportsBar'


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
            <AllSportsBar />
        </React.Fragment>

    )
}
