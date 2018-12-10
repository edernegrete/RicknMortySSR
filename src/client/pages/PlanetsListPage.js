import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import TextCard from '../components/TextCard/TexCard';
import Loading from '../components/Loading/Loading';
import { fetchPlanets } from '../actions';
class PlanetsList extends Component {
    
    componentDidMount() {
        if(this.props.planets.length > 0) return
        this.fetchData()
    }
    fetchData() {
        if(!this.props.hasMore) return
        return this.props.fetchPlanets(this.props.info.next);
    }
    renderList(t) {
        return this.props.planets.map((planet) => {
            const lists = [
                {
                    key: t('planets.dimension'),
                    value: planet.dimension,
                },
                {
                    key: t('planets.numberOfResidents'),
                    value: planet.residents.length,
                }
            ]

            return <TextCard
                            key={planet.id}
                            name={planet.name}
                            list={lists}></TextCard>
        })
    }
    render() {
        const { t } = this.props
        return (
            <div className="Planets">
                <h2>{t('general.planets')}</h2>
                <div className="Planets-list">
                    {this.props.planets && 
                        <InfiniteScroll
                            dataLength={this.props.planets.length}
                            next={this.fetchData.bind(this)}
                            hasMore={this.props.hasMore}
                            loader={<Loading></Loading>}>
                                {this.renderList(t)}
                        </InfiniteScroll>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps({planets}) {
    return {
        planets: planets.planetsList,
        info: planets.info,
        hasMore: planets.hasMore
    }
}
function loadData(store) {
    return store.dispatch(fetchPlanets());
}

export default {
    component: withNamespaces('translations')(connect(mapStateToProps, {fetchPlanets})(PlanetsList)),
    loadData
}
