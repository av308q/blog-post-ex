import React, {Component} from "react";
// import (link) from

class listLayout extends Component {
    state = {
        showDetails: true,
        posts: null,
        postData: null 
    };

    componentDidMount() {
        const {posts} = this.props;

        this.setState({
            posts: posts.default
        })


    }
render (){
    const {posts, showDetails, postData} = this.state;
    return (<div>
        <ul>
            {posts.map((post,index)=>{
                return (
                    <li key={index}>{post.post_title}</li>

                )
            })}
        </ul>
    </div>)
 } 
}  

export default listLayout;
    
