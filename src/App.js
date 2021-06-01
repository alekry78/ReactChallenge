import React, {useEffect, useState} from 'react';
import {AppContainer, Avatar, Details, Mail, Name, UserContainer} from "./App.styles";

const App = () => {
    const[data,setData]=useState(false);
    const[users,setUsers]=useState([]);
    useEffect(() =>{
        fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json")
            .then(response => response.json())
            .then(user => {
                setUsers(user);
                setData(true);
            });
    },[])
    if(data===false){
        console.log("Jeszcze nie mam danych");
    }else{
        users.sort((a,b)=>{
            const nameA = a.last_name.toUpperCase();
            const nameB = b.last_name.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        })
    }
    return(
        <AppContainer>
            <h1>React Challenge</h1>
            {data ? users.map(el=>{
                    return(
                        <UserContainer>
                            <Avatar>
                                {el.first_name.charAt(0)}
                                {el.last_name.charAt(0)}
                            </Avatar>
                            <Details>
                                <Name>
                                    {el.first_name}
                                    {el.last_name}
                                </Name>
                                <Mail>
                                    {el.email}
                                </Mail>
                            </Details>
                        </UserContainer>
                    )
                })
                :
                <h1>Laduje dane</h1>
            }
        </AppContainer>
    )
};

export default App