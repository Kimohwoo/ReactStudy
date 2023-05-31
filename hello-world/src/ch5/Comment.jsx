//promp, namemment.jsx
import React from 'react';
import AvatarImg from './AvatarImg';
import logo from './cat.jpg';

const styles = {
    wrapper: {
        margin: 10,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
        
    },
    imageContainer: {

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    nameText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold"
    },
    commentText: {
        color: "black",
        fontSize: 18,
        
    }
}

const Comment = props => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <AvatarImg src={logo} alt='사진1' style={styles.image}/>
          </div>
            <h1>테스트 컴포넌트</h1>
        </div>
    );
};

export default Comment;