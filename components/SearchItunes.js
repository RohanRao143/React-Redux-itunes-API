import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import FetchedArtists from '../containers/fetched-artists';
import {fetchArtists} from '../actions/index'
import {bindActionCreators} from 'redux'
import {FormControl,Button,Grid,Row,Col} from 'react-bootstrap';

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
         <Grid>
             <Row className="show-grid">
                 <Col xsOffset={5} style={{marginBottom:10}}>
                     <h4>Search iTunes</h4>
                 </Col>
             </Row>
             <Row className="show-grid">
                 <Col md={6} mdOffset={4} style={{marginBottom:10}}>
                    <FormControl style={{width:'50%'}} type='text' onChange={this.handleQuery} />
                 </Col>
             </Row>
             <Row className="show-grid">
                 <Col md={6} mdOffset={5}>
                     <Button bsStyle="primary" onClick={()=>this.handleSubmit(this.props)}>Search</Button>
                 </Col>
             </Row>
             <FetchedArtists/>
         </Grid>
      );
   }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchArtists:fetchArtists},dispatch)
}
export default connect(null,mapDispatchToProps)(SearchItunes);
