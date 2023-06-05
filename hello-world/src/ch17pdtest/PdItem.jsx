import React from 'react';
import styled from 'styled-components';

//현재, 목록 요소 사용이 될 예정
//간단히 UI 구성
//이미지, 제목, 내용
const PdItemBlock = styled.div`
    display: flex;

    .thumbnail{
        margin-right: 1rem;
        img{
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents{
        h2{
            margin: 0;
            a{
                color: black;
            }
        }
        p{
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }

`;

const PdItem = ({article}) => {
    //비구조화 할당
    if(article.MAIN_TITLE !== null){
        var { MAIN_TITLE, MAIN_IMG_NORMAL, ITEMCNTNTS } = article;
    } else if(article.baseDate !== null){
        var { baseDate, baseTime, fcstDate } = article;
        console.log(article);
    }

//수행의 결과는 li라는 태그에 요소로 넣고 있음
// const nameList = names.map(names => <li key={names.id} onDoubleClick={(onRemove)} >{names.text}</li>);

    return (
            <PdItemBlock>
                {MAIN_IMG_NORMAL && (
                    <div className='thumbnail'>
                        <a href="MAIN_IMG_NORMAL" target='_blank' rel='noopener noreferer'>
                            <img src={MAIN_IMG_NORMAL} alt='thumbnail'/>
                        </a>
                    </div>
                    )}
                    {MAIN_TITLE &&(
                    <div className='contents'>
                        <h2>{MAIN_TITLE}</h2>
                        <p>{ITEMCNTNTS}</p>
                    </div>
                    )}
                    <div className='contents'>
                        <h2>{baseDate}</h2>
                        <p>{baseTime}</p>
                        <p>{fcstDate}</p>
                    </div>
            </PdItemBlock>
    );
};

export default PdItem;