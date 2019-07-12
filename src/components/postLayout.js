import React from "react";
import Postdata from "./postData";

const PostLayout = props => {
    const {match, post } = props;
    const postId = parseInt(match.params.id);

    return post.default.map(post =>{
        if (post.Id === postId) {
            return <PostData postData={post} key={`post-id-${postId}`} />
        }
        



{/* <h1>this is a post page</h1>
<p>This will eventually load data for ourID number {match.params.id}</p> */}

export default PostLayout;