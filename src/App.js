import React, {useEffect, useState} from 'react';
import {AppContainer, Avatar, Details, Image, List, Mail, Name, Search, UserContainer} from "./App.styles";

const App = () => {
    const [data, setData] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json")
            .then(response => response.json())
            .then(user => {
                const User = [];
                for (let i = 0; i < Array.from(user).length; i++) {
                    User.push({
                        id: Array.from(user)[i].id,
                        first_name: Array.from(user)[i].first_name,
                        last_name: Array.from(user)[i].last_name,
                        email: Array.from(user)[i].email,
                        gender: Array.from(user)[i].gender,
                        avatar: Array.from(user)[i].avatar,
                        checked: false
                    })
                }
                setUsers(User)
                setData(true);
            });
    }, [])
    if (data === false) {
        console.log("Jeszcze nie mam danych");
    } else {
        users.sort((a, b) => {
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
    const handleCheck = (ID) => {
        const Users = [...users];
        Users[Users.findIndex(i => i.id === ID)].checked = !Users[Users.findIndex(i => i.id === ID)].checked;
        setUsers(Users);
        console.log(users.filter(el => el.checked === true))
    }
    const [name,setName] =useState("");
    const handleSearch = (e)=>{
        setName(e.target.value)
        const Users = [...users];

    }
    return (
        <AppContainer>
            <h1>React Challenge</h1>
            <Search type="text" value={name} onChange={(e)=>handleSearch(e)}/>
            {data ?
                <List>
                    {users.map(el => {
                        return (
                            <li key={el.id}>
                                <UserContainer onClick={() => handleCheck(el.id)}>
                                    {el.avatar ? <Image src={el.avatar} alt="Logo"/> :
                                        <Avatar>
                                            {el.first_name.charAt(0)} {el.last_name.charAt(0)}
                                        </Avatar>
                                    }
                                    <Details>
                                        <Name>
                                            {el.first_name}
                                            {el.last_name}
                                        </Name>
                                        <Mail>
                                            {el.email}
                                        </Mail>
                                    </Details>
                                    <input type="checkbox" name="checkbox" checked={el.checked}
                                           onChange={() => handleCheck(el.id)}/>
                                </UserContainer>
                            </li>
                        )
                    })}
                </List>
                :
                <h1>Laduje dane</h1>
            }
        </AppContainer>
    )
}

export default App