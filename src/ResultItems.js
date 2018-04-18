import React from 'react'

class ResultItems extends React.Component{
    render(){
        var style={
            // border:'1px solid',
            borderRadius:'2px',
            // margin:'10px',
            padding:'30px',
            backgroundColor: 'rgba(250,250,250,1)',
            background: '#fff',
            color: 'rgba(0,0,0,.87)',
            marginBottom:'20px',
            boxShadow: '0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12)'
        };
        return <div style={style}>{this.props.trackName}</div>
    }
}
export default ResultItems
