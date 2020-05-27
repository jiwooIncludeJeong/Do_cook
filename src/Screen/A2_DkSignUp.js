import React,{useState, useEffect} from 'react';
import {StyleSheet, Text, Alert} from 'react-native';
import Button from '~/Components/MyButton';
import Styled from 'styled-components/native';
import Input from '~/Components/Input';
import { firebase } from '@react-native-firebase/auth';

const Container = Styled.View`
  flex: 1;
  padding: 20px;
`;

const TitleText = Styled.Text`
font-size: 34px;
font-weight: bold;
color: #DE6139;
letter-spacing: 0.5px;
`;

const Blank = Styled.View`
  flex: 2;  
`;
const FormContainer = Styled.View`
  width: 300px;
  margin-top: 50px;
  margin-bottom: 20px;
`;
const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

`;


const InputTextName = Styled.Text`
  margin: 2.5px;
  color: #EC6337;
  font-weight: normal;
  font-size: 15px;
`;
const FormAndButton = Styled.View`
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = Styled.View`
  flex: 1;  
  justify-content: center;
  align-items: center;
`;
const A2_DkSignUp = ({navigation: {navigate}} ) => {

  
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [passwordcheck,setpasswordcheck]=useState('');
  const [errorMessage,seterrorMessage]=useState(null);


  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate('A4_InputNickname'))
      .catch(e => seterrorMessage(e.message)); //TODO : firebase
    console.log('handleSignUp');
    console.log(errorMessage);
  };
//비밀번호 6자 이상
  return (
  <Container>
    <TitleContainer>
      <TitleText>회원가입</TitleText>
    </TitleContainer>
    <FormContainer>
    <InputTextName>이메일 주소</InputTextName>
              <Input 
              style={{ marginBottom: 15}}
              onChangeText={email=>{setemail(email)}}
              value={email} />
              <InputTextName>비밀번호</InputTextName>
              <Input
                style={{ marginBottom: 15 }}
                secureTextEntry={true}
                onChangeText={password=>setpassword(password)}
                value={password}
              />
              <InputTextName>비밀번호 확인</InputTextName>
              <Input
                style={{ marginBottom: 15 }}
                secureTextEntry={true}
                onChangeText={passwordcheck=>setpasswordcheck(passwordcheck)}
                value={passwordcheck}
              />
            </FormContainer>
    <ButtonContainer>
    <Button
        style={{ marginBottom: 24 }}
        title="다음"
        onPress={() => {
          if(password == passwordcheck){
            handleSignUp();}
          else{
            alert('비밀번호와 비밀번호 확인이 다릅니다.');}
      }}
      />
    </ButtonContainer>
  </Container>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});

export default A2_DkSignUp;