import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import DetailCard from '../components/DetailCard/DetailCard';
import Loading from '../components/Loading/Loading';
import { fetchCharacters } from '../actions';
import './css/CharactersListPage.css';
class CharactersList extends Component {
    
    componentDidMount() {
        if(this.props.characters.length > 0) return
        this.fetchData()
    }
    fetchData() {
        if(!this.props.hasMore) return
        return this.props.fetchCharacters(this.props.info.next)
    }
    renderList() {
        return this.props.characters.map(character => {
            return <DetailCard  key={character.id}
                                image={character.image}
                                title={character.name}
                                subtitle={character.status}></DetailCard>
        })
    }
    render() {
        const { t } = this.props;
        return (
            <div className="Characters">
                <h2>{t('general.characters')}</h2>
                <div className="Characters-list">
                    {this.props.characters && 
                        <InfiniteScroll
                            dataLength={this.props.characters.length}
                            next={this.fetchData.bind(this)}
                            hasMore={this.props.hasMore}
                            loader={<Loading></Loading>}>
                                {this.renderList()}
                        </InfiniteScroll>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters.charactersList,
        info: state.characters.info,
        hasMore: state.characters.hasMore
    }
}
function loadData(store) {
    return store.dispatch(fetchCharacters());
}

export default {
    component: withNamespaces('translations')(connect(mapStateToProps, {fetchCharacters})(CharactersList)),
    loadData
}
