import React, { useEffect, useState } from 'react';
import { LogoutButton, MyProfileContainer, MyProfileHeader } from './MyProfilepage.styles';
import { TermsService } from './TermsService';
import { axios } from '../../api/http';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const MyProfilepage: React.FC = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        userId: 1,
        nickname: '닉네임닉네임',
        email: 'nickname@naver.com',
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/users');
                setProfile(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const handleLogout = () => {
        Cookies.remove('AccessToken');
        Cookies.remove('RefreshToken');
        navigate('/');
    };
    return (
        <MyProfileContainer>
            <MyProfileHeader>
                <h2>
                    {profile.nickname ? (
                        <span style={{ color: '#2197BC' }}>{profile.nickname}</span>
                    ) : (
                        <span style={{ color: '#2197BC' }}>{Cookies.get('Nickname')}</span>
                    )}
                    님
                </h2>
                <p>{profile.email}</p>
            </MyProfileHeader>
            <TermsService />
            <p>앱 버전 정보 &nbsp;V1.0.0 최신버전</p>

            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </MyProfileContainer>
    );
};

export default MyProfilepage;
