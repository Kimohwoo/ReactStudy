import React from 'react';
import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
    {name: "food", text: "부산맛집정보 서비스"}, 
    {name: "walking", text: "부산도보여행 정보 서비스"},
    // {name: "weather", text: "날씨"},
]

//카테고리 부분 스타일 설정

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width: 100%;
        overflow-x: auto;
    }
`;

// const Category = styled.div`
//     font-size: 1.2rem;
//     cursor: pointer;
//     white-space: pre;
//     text-decoration: none;
//     color: inherit;
//     padding-bottom: 0.2rem;
    
//     &:hover{
//         color: #495057;
//     }
const Category = styled(NavLink)`
    font-size: 1.2rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.2rem;
    
    &:hover{
        color: #495057;
    }

    &.active{
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #c4cf22;
          &:hover{
            color: #db6e3b;
          }
    }

    & + & {
        margin-left: 1rem;
    }
`;

// ${props => 
//     props.active && css`
//         font-weight: 600px;
//         border-bottom: 2px solid #22b8cf;
//         color: #22b8cf;
//           &:hover{
//             color: #3bc9db;
//           }
//     `
// }

// & + & {
//     margin-left: 1rem;
// }

// const Categories = ({onSelect, category}) => {

    //방법 1
    // return (
    //     <CategoriesBlock>
    //         {categories.map((c) => (
    //             <Category
    //             key={c.name}
    //             active={category === c.name}
    //             onClick={() => onSelect(c.name)}
    //           >
    //             {c.text}
    //           </Category>
    //         )
    //         )}
    //     </CategoriesBlock>
    // );

    //방법2
const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                key={c.name}
                className={({isActive}) => (isActive ? "active" : undefined)}
                to={c.name === 'food'? '/' : `/${c.name}`}
              >
                {c.text}
              </Category>
            )
            )}
        </CategoriesBlock>
    );

};

export default Categories;