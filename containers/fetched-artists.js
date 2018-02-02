import React from 'react';
import {connect} from 'react-redux';

class FetchedArtist extends React.Component{
    render(){
        console.log(this.props)
        let {artists} = this.props;
        if(!artists.artists){
            return(
                <div>
                </div>
            )
        }
        if(artists.error!=''){
            return(
                <h2>{artists.error}</h2>
            )
        }
        return(
            <div>
                {artists.artists.map((artist)=>{
                    if(artist.collectionName) {
                        return (
                            <ul>
                                <li>{artist.collectionName}</li>
                            </ul>
                        )
                    }
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        artists:state.fetchArtists
    }
}

export default connect(mapStateToProps)(FetchedArtist)