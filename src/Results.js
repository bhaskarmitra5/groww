import React from 'react'
import ResultItems from './ResultItems'

class Results extends React.Component{
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
      console.log(window.innerHeight,window.scrollY,document.body.offsetHeight)
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100) &&
      this.props.searchResult.num_items > 0 && !this.props.searchResult.is_loading
    ) {
      this.props.search("",this.props.searchResult.num_items+1);
    }
  }
    render(){
        var resultItems=[]
        console.log(this.props.searchResult)
        if(this.props.searchResult.items.length != 0) {
            var resultItems = this.props.searchResult.items.map(function(result) {
                return <ResultItems  key={result.publishedAt+Math.random()} trackName={result.description} />
            });
        }
        return(
            this.props.searchResult.num_items > 0 ?
            <div style={{border: '1px solid rgba(0,0,0,.03)',boxShadow: '0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12)',margin:'60px',backgroundColor:'rgba(250,250,250,1)'}}>
                <div style={{backgroundColor: 'rgba(0,0,0,.03)',color: 'rgba(0,0,0,.54)',padding: '20px',textAlign: 'center' }}>
                    <a>
                        Your Search
                    </a>
                </div>
                <div style={{padding:'30px'}}>
                {resultItems}
                </div>
            </div>:null

        );
    }
}
export default Results;
