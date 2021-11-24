import React from 'react'
import CocktailList from '../../components/CocktailList'
import Layout from '../../containers/Layout'
import { MainContainer } from 'src/containers/Layout/styles'
import Hero from 'src/components/Hero'
import SearchBar from 'src/components/SearchBar'
import CardList from 'src/components/CardList'


export default function Home() {
    return (
        <Layout>
            <MainContainer>
               <SearchBar/>
                <CardList/>
                {/* <Hero />
                <CocktailList term="/home" feed="cocktails" sI={ 0 } sF={ 8 } />
                <CocktailList term="/home2" feed="" sI={ 0 } /> */}
            </MainContainer>
        </Layout>
    )
}
