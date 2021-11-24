import React from 'react'
import { CocktailCardType, CocktailCardText, CocktailCardImage } from './styles'

interface IProps {
    title: string;
    image: string;
}

export default function CocktailCard(props: IProps) {
    const { title, image } = props
    return (
        <CocktailCardType>
            <CocktailCardImage image={ image } />
            <CocktailCardText>
                { title }
            </CocktailCardText>
        </CocktailCardType>
    )
}
