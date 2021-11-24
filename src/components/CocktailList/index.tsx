import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../store';
import { ISport } from '../../store/reducers/SportReducers';
import CocktailCard from '../CocktailCard/index';
import { CocktailListStyled } from './styles';

// Create the containers interface
interface IProps {
    sports: ISport[];
}

interface OtherProps {
    sI: number;
    sF?: number;
    feed: string;
    term: string;
}
// old way
// const CocktailCard: React.FunctionComponent<IProps> = props => {

// New Way
const CocktailList = (props: (IProps & OtherProps)) => {
    const { sI, sF, sports } = props


    return (
        <CocktailListStyled >
            { sports.slice(sI, sF).map(({ strSport, strSportThumb }) => {
                return <CocktailCard key={ strSport } title={ strSport } image={ strSportThumb } />

            }) }

        </CocktailListStyled >
    )
}

// Grab the cocktails from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
    return {
        sports: store.sportsState.sports,
    };
};

export default connect(mapStateToProps)(CocktailList)



