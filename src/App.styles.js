import styled from "styled-components";

export const AppContainer = styled.main`
  html{
    padding:0;
    margin:0;
  }
  width:100vw;
  height:100vh;
  padding:0;
  margin:0;
`
export const UserContainer = styled.div`
  width:100vw;
  height:45px;
  border-bottom:1px solid dimgrey;
  background-color:lightgray;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding:5px;
`
export const Avatar = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:20px;
  color:grey;
  background-color:white;
  border-radius:50%;
  width:40px;
  height:40px;
  border:1px solid grey;
  margin-right:5px;
`
export const Details = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin:0;
`
export const Name = styled.span`
  font-size:20px;
  color:black;
`
export const Mail = styled.span`
  font-size:15px;
  color:grey;
`