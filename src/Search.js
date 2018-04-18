import React from 'react'

class Search extends React.Component{
    handleSearch(e) {
        e.preventDefault()
        console.log(this._inputElement.value)

        var url="https://www.googleapis.com/customsearch/v1?key=AIzaSyBBh_URhMLG3FGGn-WFuf8Ww2g4D1sjMe4&cx=004592283957017248676:yzinsfkmf_k&q="+this._inputElement.value
        // var url="https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=9471171031b84d87a2d5f77578745650"
        console.log(url)
        if (this._inputElement.value.length!=0){
            this.props.search(url,1,true)
        }
    }
    render(){
        return (
            <form style={{textAlign:'center'}} onSubmit={this.handleSearch.bind(this)}>
                <input style={{padding:'10px',width:'50%'}} ref={(a) => this._inputElement = a}
                  placeholder="enter query">
                </input>
                <button style={{padding:'10px'}} type="submit">Search</button>
            </form>
        )
    }
}
export default Search
