import '../../components/signup.css'
import React, {useContext} from "react";
import {UserContext} from "../../context/User";


const MainPage = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <h2>안녕하세요 {user?.name}님!</h2>
        </div>
    );
};

export default MainPage;
