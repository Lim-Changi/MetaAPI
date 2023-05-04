import '../../components/signup.css'
import SignupComponent from "../../components/Signup";
import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../../context/User";


const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [pw, setPw] = useState('')
    const [pwCheck, setPwCheck] = useState('')
    const [isPwMatch, setIsPwMatch] = useState(false)
    const [isPwTouched, setIsPwTouched] = useState(false);
    const [isPwCheckTouched, setIsPwCheckTouched] = useState(false);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        if(!emailValue) {
            setIsValidEmail(false)
        }
        setEmail(emailValue);
    };

    const handleEmailBlur = () => {
        setIsEmailTouched(true)
    }

    const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pwValue = event.target.value;
        setPw(pwValue);
    };

    const handlePwCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pwCheckValue = event.target.value;
        setPwCheck(pwCheckValue)
    };

    const handlePwBlur = () => {
        setIsPwTouched(true)
    }

    const handlePwCheckBlur = () => {
        setIsPwCheckTouched(true)
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nameValue = event.target.value;
        setName(nameValue);
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const ageValue = event.target.value;
        setAge(ageValue);
    };

    useEffect(() => {
        if (isEmailTouched) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsValidEmail(emailRegex.test(email));
        }
    }, [email, isEmailTouched]);

    useEffect(() => {
        if (isPwTouched && isPwCheckTouched) {
            setIsPwMatch(pw === pwCheck);
        }
    }, [isPwCheckTouched, isPwTouched, pw, pwCheck]);

    const submitSignup = () => {
        setUser({email, name, age})
        navigate('/main')
    }

    const handleReset = () => {
        setEmail('')
        setIsValidEmail(false)
        setIsEmailTouched(false)
        setPw('')
        setPwCheck('')
        setIsPwMatch(false)
        setIsPwTouched(false)
        setIsPwCheckTouched(false)
        setName('')
        setAge('')
    }

    return (
        <div className= "signup-main">
            <header>
                <h2>회원가입</h2>

                <div onChange={handleEmailChange} onBlur={handleEmailBlur}>
                    <SignupComponent name="이메일" required={true} text={"이메일을"} value={email}/>
                    {isEmailTouched && !isValidEmail && <span style={{ color: 'red', fontSize: '12px'}}>유효하지 않은 이메일 형식</span>}
                </div>
                <div onChange={handlePwChange} onBlur={handlePwBlur}>
                    <SignupComponent name="비밀번호" required={true} text={"비밀번호를"} value={pw}/>
                </div>
                <div onChange={handlePwCheckChange} onBlur={handlePwCheckBlur}>
                    <SignupComponent name="비밀번호 재확인" required={true} text="비밀번호를 다시" value={pwCheck}/>
                    {isPwTouched && isPwCheckTouched && !isPwMatch && <span style={{ color: 'red', fontSize: '12px'}}>비밀번호가 일치하지 않습니다.</span>}
                </div>
                <div onChange={handleNameChange}>
                    <SignupComponent name="이름" text={"이름을"} value={name}/>
                </div>
                <div onChange={handleAgeChange}>
                    <SignupComponent name="나이" text={"나이를"} value={age}/>
                </div>
                <br/>
                <button className="signup-button" disabled={!isPwMatch || !isValidEmail} onClick={submitSignup}>가입하기</button>
                <br/>
                <button className="reset-button" onClick={handleReset}>초기화</button>
            </header>
        </div>
    );
};

export default SignupPage;
