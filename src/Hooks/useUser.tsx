import { createContext, ReactNode, useContext, useState } from "react";
import { IFormInput } from "../@types/User";
import { api } from "../api/api";


interface userProviderProps {
    childreen: ReactNode;
}

interface userContextData {
    user: IFormInput,
    createUser: (user: IFormInput) => Promise<void>;
}

const UserContext = createContext({} as userContextData);


export function UserProvider({ childreen }: userProviderProps) {
    const [user, setUser] = useState<IFormInput>({} as IFormInput);



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
            {childreen}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);

    if (!context) throw new Error("useUser must be used within an UserProvider");

    return context;
}
















