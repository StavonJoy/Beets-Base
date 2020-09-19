import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi();

export function getNowPlaying(){
    return spotifyApi.getMyCurrentPlaybackState()
    //   .then(res => res.json())
        // console.log(response)
        // this.setState({
        //   nowPlaying: { 
        //       name: response.item.name, 
        //       albumArt: response.item.album.images[0].url
        //     }
        // });
      }
//       )
//   }

export function testElvis() {
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log('Artist albums', data);
        return data
      });
}