import React, { useState, useRef } from "react";
const styles = {
  image: {
    with: 200,
    height: 300,
    borderRadius: 50,
  },
};

const FileImageTest = () => {
  const [imgFile, setImgFile] = useState("");
  //참조형 변수, 이름표 설정하고, 특정 태그에 적용해서, 해당 요소의 속성에 접근하기 좋다.
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    //순서3, 특정 태그의 속성에 접근
    const file = imgRef.current.files[0];
    //브라우저에 내장된 기능(브라우저 API): FileReader, readAsDataURL
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div>
      {/* 업로드 된 이미지 미리보기 */}
      <img
        src={imgFile ? imgFile : `../cat.jpeg`}
        alt="프로필 이미지"
        style={styles.image}
      />
      <br />
      {/* 이미지 업로드 input */}
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={saveImgFile}
        ref={imgRef}
      />
    </div>
  );
};

export default FileImageTest;