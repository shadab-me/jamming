import React from 'react';
import TrackList from '../TrackList/tracklist';
import './playlist.css';

class PlayList extends React.Component {
   constructor(props){
       super(props);
       this.handlNameChange = this.handlNameChange.bind(this);
   }
    handlNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    
    render(){
        return(
            <div className = "Playlist">
            <input defaultValue = "New Playlist" onChange = {this.handlNameChange}/>

            <TrackList tracks={this.props.playlistTracks} onRemove = {this.props.onRemove} isRemoval = {true}/>

            <button className = "Playlist-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}
export default PlayList;
  