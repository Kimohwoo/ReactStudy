import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PdItem from './PdItem';
import axios from '../../node_modules/axios/index';

//목록의 틀
const ItemListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    }
`;

// const sampleArticle = {
//     MAIN_TITLE: "제목",
//     ITEMCNTNTS: "내용",
//     MAIN_IMG_NORMAL: "https://via.placeholder.com/160",
// }

const ItemList = ({category}) => {
    //state 관리 하기위한 변수들, 하나는 데이터, 하나는 로딩(받고있는지 상태 여부)
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(false)

    //useEffect: 마운트, 업데이트를 훅스로 쉽게 구현하는 함수.
    useEffect(
        () => {
            const fetchData = async () => {
                setLoading(true);
                try{
                    //추가 작업, 스위치 베이스로 분기 설정
                    const query = category === "food"? "food" : `${category}`;
                    switch(query){
                        case "food":
                            var response = await axios.get("https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=cXgLGxZlC%2BV%2F06%2B8LDomc9m8TAR6VHymyLNbeFGuwGCIJcUfxAkVDHaPa3HQx5HeT0kWSkyFnh0JdmOV8rTiRg%3D%3D&pageNo=1&numOfRows=10&resultType=json")
                            console.log(response.data.getFoodKr.item)
                            setArticles(response.data.getFoodKr.item)
                            break;

                        case "walking":
                            response = await axios.get("https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=cXgLGxZlC%2BV%2F06%2B8LDomc9m8TAR6VHymyLNbeFGuwGCIJcUfxAkVDHaPa3HQx5HeT0kWSkyFnh0JdmOV8rTiRg%3D%3D&pageNo=1&numOfRows=10&resultType=json")
                            console.log(response.data.getWalkingKr.item)
                            setArticles(response.data.getWalkingKr.item)
                            break;

                        case "weather":
                            response = await axios.get("https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=cXgLGxZlC%2BV%2F06%2B8LDomc9m8TAR6VHymyLNbeFGuwGCIJcUfxAkVDHaPa3HQx5HeT0kWSkyFnh0JdmOV8rTiRg%3D%3D&pageNo=1&numOfRows=1000&dataType=XML&base_date=20230605&base_time=0630&nx=55&ny=127")
                            // console.log("weather : " + response.data.response.body.items.item)
                            setArticles(response.body.items.item)
                            break;

                        default:
                                alert("카테고리 선택해주세요");
                    }

                } catch(e){
                    console.log(e);
                }
                setLoading(false);
            }; 
            fetchData();
        }, [category]
    )

    if(loading){
        return <ItemListBlock>대기중...</ItemListBlock>;
    } 

    if(!articles){
        console.log("articles 응답이 없습니다.")
        return null;
    }

    return (
        <ItemListBlock>
            {articles.map((article) => (
                <PdItem key={article.MAIN_TITLE} article={article} />
            ))}
        </ItemListBlock>
    );
};

export default ItemList;