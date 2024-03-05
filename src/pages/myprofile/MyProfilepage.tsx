import React, { useEffect, useState } from 'react';
import {
    LogoutButton,
    MyProfileContainer,
    MyProfileHeader,
    ProfileSideButton,
    ProfileSideContainer,
} from './MyProfilepage.styles';
import { TermsService } from './TermsService';
import { axios, http } from '../../api/http';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hook/useModal';
import DeleteProfileModal from './profilemodal/SecessionModal';
import NameChangeModal from './profilemodal/NameChangeModal';

const MyProfilepage: React.FC = () => {
    const { open, modalOpen, modalClose } = useModal();
    const [secession, setSecession] = useState(false);
    const [nameChange, setNameChange] = useState(false);
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

    const handleSecession = () => {
        setSecession(true);
        modalOpen();
    };
    const handleDeleteClick = async () => {
        try {
            await http.delete(`/api/users/delete-user`);
            Cookies.remove('AccessToken');
            Cookies.remove('RefreshToken');
            alert('회원 탈퇴 되었습니다.');
        } catch {
            alert('서버 오류로 회원 탈퇴에 실패했습니다.');
        }
        setSecession(false);
        modalClose();
    };

    const handelName= () => {
        setNameChange(true);
        modalOpen();
    };
    const handleNameChange = (newNickname: string) => {
        setProfile(prevProfile => ({
            ...prevProfile,
            nickname: newNickname
        }));
    };
    return (
        <>
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
                    <TermsService />
                </MyProfileHeader>
                <p>VERSION : V1.0.0 최신버전</p>
                {open && secession && (
                    <DeleteProfileModal
                        handleDeleteClick={handleDeleteClick}
                        modalClose={modalClose}
                    />
                )}
                {open && nameChange && (
                    <NameChangeModal
                        modalClose={modalClose}
                        handleNameChange={handleNameChange}
                    />
                )}
                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </MyProfileContainer>
            <ProfileSideContainer>
                <ProfileSideButton onClick={handelName}>닉네임 변경</ProfileSideButton>
                <ProfileSideButton onClick={handleSecession}>회원 탈퇴</ProfileSideButton>
            </ProfileSideContainer>
        </>
    );
};

export default MyProfilepage;
