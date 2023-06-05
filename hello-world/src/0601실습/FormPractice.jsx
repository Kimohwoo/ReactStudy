import React, { useRef, useState } from 'react';
import Cat from '../cat.jpeg';

const styles = {
    image: {
        with: 100,
        height: 100,
        borderRadius: 200,
      }
}

const passwordCheck = () => {
    return (
        <div>
            
        </div>
    );
};

const FormPractice = () => {


    const [imgFile, setImgFile] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const imgRef = useRef();

    const saveImgFile = () => {

        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
        }

    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleChangePasswordCheck = (event) => {
        setPasswordCheck(event.target.value);
        // if(password === passwordCheck){
        //     alert("비밀번호 : " + password);
        //     } else {
        //         setPasswordCheck(event.target.value);
        //     }
        // event.preventDefault();
    }


    const handleSubmit = (event) => {
        if(password === passwordCheck){
        alert("이메일 : " + email);
        alert("비밀번호 : " + password);
        } else {
            alert("비밀번호가 다릅니다.");
        }
        event.preventDefault();
    }

    return (
        <div>
            <img src={imgFile? imgFile : Cat} alt="프로필 이미지"
                style={styles.image}/>
            <form onSubmit={handleSubmit}>
                <input type='file' accept='image/*' id="profileImg"
                    onChange={saveImgFile} ref={imgRef} />
                    <br />
                <label>
                    이메일 : <input type='text' value={email} onChange={handleChangeEmail}/>
                </label>
                <br />
                <label>
                    비밀번호 : <input type='password' value={password} onChange={handleChangePassword}/>
                </label>
                <br />
                <label>
                    비밀번호 체크 : <input type='password' value={passwordCheck} onChange={handleChangePasswordCheck}/>
                    
                </label>
                <br />
                <button type='submit'>제출하기</button>
            </form>
        </div>
    );
};

export default FormPractice;