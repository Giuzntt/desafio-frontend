import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IFormInput } from "../@types/User";
import { api } from "../api/api";


interface userProviderProps {
    children: ReactNode;
}

interface userContextData {
    user: IFormInput,
    createUser: (user: IFormInput) => Promise<void>;
}

const UserContext = React.createContext({} as userContextData);


export function UserProvider({ children }: userProviderProps) {
    const [user, setUser] = useState<IFormInput>({} as IFormInput);

    useEffect(() => {
        loadUserById('84');


    }, []);


    async function loadUserById(id: string) {
        const response = await api.get(`/user/${id}`);
        setUser(response.data);
    }

    async function createUser(data: IFormInput) {

        await  api.post('/user', data).then(response => {

            if (response.status === 201) {
                console.log('Usuário cadastrado com sucesso');
                setUser(data);
            }

            
        }).catch(error => {
            console.log(error);
        }
        )
    }


    return (
        <UserContext.Provider value={{ user, createUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);

    if (!context) throw new Error("useUser must be used within an UserProvider");

    return context;
}
















