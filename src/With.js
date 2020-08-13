import React from 'react'

const With=(WrappedComponent,dataUrl)=>{
    class With extends React.Component{
        state={
            data:[]
        }
        
        componentDidMount() {
            fetch(this.props.dataUrl)
            .then(res=>res.json())
            .then(data=>this.setState({data:data.splice(0,3)}))
        }
        
        render(){
            return(
                this.state.data.length < 1 ?  <h2>Loading</h2> :
                    <WrappedComponent data={this.state.data} {...this.props} />
            )
        }
    }
    return With
}
export default With