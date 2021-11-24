import { connect } from 'react-redux';
import { IAppState } from 'src/store';
import { ISport } from '../../store/reducers/SportReducers';
import { Container } from './styles';

interface IProps {
    sports: ISport[];
}

const SportsIcons = (props: IProps) => {
    const { sports } = props

    return (
        <Container>
            { sports.map(({ strSportIconGreen, idSport, strSport }) => { return <ul key={ idSport }><a href={ `sports/${idSport}` }><img  src={ strSportIconGreen } alt={ strSport } /></a> </ul> }) }
        </Container>
    )
}

const mapStateToProps = (store: IAppState) => {
    return {
        sports: store.sportsState.sports,
    };
};
export default connect(mapStateToProps)(SportsIcons)