export const fetchArtists = (artists)=>{
    return {
        type:'FETCH_ARTISTS',
        payload:artists,
    }
};

export const errorFetchingArtists = (error) =>{
  return {
      type:'ERROR_FETCHING_ARTISTS',
      payload:error
  }
};