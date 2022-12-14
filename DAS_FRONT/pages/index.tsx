import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Slider from "../components/Slider";
import ClubCard from "../components/MainPageCard/ClubCard";
import UserCard from "../components/MainPageCard/UserCard";

export default function Home() {
  return (
    <>
      <Slider />
      <Content>
        <Title>동아리</Title>
        <Allsee>모두 보기</Allsee>
      </Content>
      <Cards>
        <ClubCard></ClubCard>
      </Cards>
      <Content>
        <Title>학생</Title>
        <Allsee>모두 보기</Allsee>
      </Content>
      <Cards>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
      </Cards>
    </>
  );
}

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15%;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 27px;
  font-weight: 700;
`;

const Allsee = styled.div`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.Main};
`;

const Cards = styled.div`
  display: flex;
  margin-left: 15%;
  margin-top: 10px;
`;
