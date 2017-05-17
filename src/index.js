/**
 * Created by david on 5/15/17.
 */
import _ from 'lodash';
// this part of react knows how to work with components
import React, {Component} from 'react';
// this part of react works with the DOM as the name would suggest
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyCR-TWqDKrtrrw-IW8iBYbxDTsNJ5beE44";


// create a new component.  this component should produce some HTML
// this is a class not an instance
// the other way of doing this was 'class App extend React.Component' without calling it in the React import
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        // .debounce is a lodash function that allows you to fun the function every x milliseconds instead of it updating continuously
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                {/*passing the videos from class App to const VideoList*/}
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}



// take this component's generated HTML and put it on the page (in the DOM)
// you have to put a jsx < /> around App to make it an instance of App and not pass it the class
// <App /> is the same as <App></App>
ReactDOM.render(<App />, document.querySelector('.container'));