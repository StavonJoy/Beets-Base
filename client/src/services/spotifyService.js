import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi();

export function getNowPlaying(res){
    return spotifyApi.getMyCurrentPlaybackState()
    //   .then(res => res.json())
        // console.log(response)
        // this.setState({
        //   nowPlaying: { 
        //       name: response.item.name, 
        //       albumArt: response.item.album.images[0].url
        //     }cd
        // });
      }
//       )
//   }
