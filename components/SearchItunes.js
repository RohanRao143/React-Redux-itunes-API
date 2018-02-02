import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import FetchedArtists from '../containers/fetched-artists';
import {fetchArtists} from '../actions/index'
import {bindActionCreators} from 'redux'

class SearchItunes extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         query:''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleQuery = this.handleQuery.bind(this);
   }

   handleSubmit(props){
       let query = this.state.query;
       if(query==''){
           return false
       }
       query = query.split(" ").join("+");
      let request = axios.get("https://itunes.apple.com/search?term="+query);
      request.then(function(res){
          console.log(res.data.results);
          props.fetchArtists(res.data.results);
      });
       request.catch(function(err){
           console.log(err);
       });
   }

   handleQuery(event){
      this.setState({query:event.target.value})
   }
   render() {
      return (
         <div>
            <input type='text' onChange={this.handleQuery} /><br/>
            <button onClick={()=>this.handleSubmit(this.props)}>Search</button>
             <br/>
             <h2>Search Results</h2>
             <FetchedArtists/>
         </div>
      );
   }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchArtists:fetchArtists},dispatch)
}
export default connect(null,mapDispatchToProps)(SearchItunes);
