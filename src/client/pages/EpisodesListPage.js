import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import TextCard from '../components/TextCard/TexCard';
import Loading from '../components/Loading/Loading';
import { fetchEpisodes } from '../actions';
class EpisodesList extends Component {
    
    componentDidMount() {
        if(this.props.episodes.length > 0) return
        this.fetchData()
    }
    fetchData() {
        if(!this.props.hasMore) return
        return this.props.fetchEpisodes(this.props.info.next)
    }
    renderList(t) {
        return this.props.episodes.map(episode => {
            const lists = [
                {
                    key: t('shows.airDate'),
                    value: episode.air_date,
                },
                {
                    key: t('shows.name'),
                    value: episode.episode,
                }
            ]
            return <TextCard 
                        key={episode.id}
                        name={episode.name}
                        list={lists}></TextCard>
        })
    }
    render() {
        const { t } = this.props;
        return (
            <div className="Episodes">
                <h2>{t('general.episodes')}</h2>
                <div className="Episodes-list">
                    {this.props.episodes && 
                        <InfiniteScroll
                            dataLength={this.props.episodes.length}
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

function mapStateToProps({episodes}) {
    return {
        episodes: episodes.episodesList,
        info: episodes.info,
        hasMore: episodes.hasMore
    }
}
function loadData(store) {
    return store.dispatch(fetchEpisodes());
}

export default {
    component: withNamespaces('translations')(connect(mapStateToProps, {fetchEpisodes})(EpisodesList)),
    loadData
}
