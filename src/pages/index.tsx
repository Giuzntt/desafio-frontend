import type { NextPage } from 'next'
import Button from '../components/Button'
import TextField from '../components/TextField';



const Home: NextPage = () => {
    return (
        <>
            <TextField
                label="Nome"
                name="email"
                type="text"
            />
            <TextField
                label="Sobrenome"
                name="email"
                type="text"
            />
            <TextField
                label="E-mail"
                name="email"
                type="email"
            />
            <TextField
                label="Data de Nascimento"
                name="email"
                type="date"
            />
            <TextField
                label="Senha"
                name="email"
                type="password"
            />
            
            <Button>Cadastrar</Button>
        </>
    );
}

export default Home
