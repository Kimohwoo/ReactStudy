import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1em;
    background: grey;
`;
const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`;

const Button = styled.button`
    color: ${props => props.dark === "black"? "white" : "dark"};
    background: ${props => props.dark === "black"? "black" : "white"};
    border: 1px solid black;
`;

const MainPage = (props) => {
    return (
        // <Wrapper>
        //     <Title>
        //         안녕, 테스트
        //     </Title>
        // </Wrapper>
        <div>
            <br/>
            <Button>nomal</Button>
            <br/>
            <Button dark = "black">다크</Button>
        </div>

    );
};

export default MainPage;