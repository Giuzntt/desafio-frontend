import type { NextPage } from 'next'
import Image from 'next/image';
import Button from '../components/Button'
import { TextArea } from '../components/TextArea';
import TextField from '../components/TextField';
import { Card, ContainerHome } from './Home/styles';



const Home: NextPage = () => {
    return (
        <ContainerHome>

            <Card>
            <h5> Cadastre-se</h5>
            <h6>Para começar, insira os dados abaixo:</h6>

            <TextField
                label="Nome"
                name="nome"
                type="text"
                spellCheck={true}
                required={true}
                />
            <TextField
                label="Sobrenome"
                name="sobrenome"
                type="text"
                spellCheck={true}
                required={true}
                />
            <TextField
                label="E-mail"
                name="email"
                type="email"
                    spellCheck={true}
                    required={true}
                />
            <TextField
                label="Data de Nascimento"
                name="email"
                type="date"
                spellCheck={true}
                required={true}
                />
            <TextField
                label="Senha"
                name="email"
                type="password"
                spellCheck={true}
                required={true}
                />

            <TextArea/>

            
            <Button className='btn-home'>Cadastrar</Button>
            </Card>

        <div className='box-img'>
            <h2>
                Teste técnico
            </h2>
            <hr  className='line'/>
            <h3>
                    Controle suas contas nacionais
                    e internacionais em um único lugar!
            </h3>

            
        </div>
           
           
        </ContainerHome>
    );
}

export default Home
