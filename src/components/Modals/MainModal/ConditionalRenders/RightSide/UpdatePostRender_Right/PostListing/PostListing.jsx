import React from "react";

function PostListing(props) {

    const postInfo = props.postInfo;

    //Function that will convert date format: yyyy/mm/dd --> mm/dd/yyyy
    function reformatDate(date) {
        const yyyy = date[0] + date[1] + date[2] + date[3];
        const mm = date[5] + date[6];
        const dd = date[8] + date[9];
        const reformattedDate = mm + '/' + dd + '/' + yyyy;
        return reformattedDate;
    }

    const reformattedDate = reformatDate(postInfo.date);


    return (
        <div key={postInfo.id} className="postListing">{reformattedDate}</div>
    )
}

export default PostListing;