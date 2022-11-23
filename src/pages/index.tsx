import type { NextPage } from 'next'
import Image from 'next/image';
import { useState } from 'react';
import Button from '../components/Button'
import CheckBox from '../components/CheckBox';
import SelectField from '../components/SelectField';
import { TextArea } from '../components/TextArea';
import TextField from '../components/TextField';
import { BgGlobe, Card, ContainerHome } from './Home/styles';



const Home: NextPage = () => {


    // set initial value input date empty
    const [date, setDate] = useState('');


    let fieldsSelect = [
        { value: '0', label: 'Selecione seu país' },
        { value: '1', label: 'Brasil' },
        { value: '2', label: 'Estados Unidos' },
        { value: '3', label: 'Inglaterra' },
    ]

    return (
        <>
        <BgGlobe/>
            <ContainerHome>
                <Card>
                    <div className='content-card'>

                    <h5> Cadastre-se</h5>
                    <h6>Para começar, insira os dados abaixo:</h6>
                    <TextField label="Nome" name="nome" type="text" spellCheck={true} required={true} />
                    <TextField label="Sobrenome" name="sobrenome" type="text" spellCheck={true} required={true} />
                    <TextField label="E-mail" name="email" type="email" spellCheck={true} required={true} />
                    <TextField
                        className='input-date'
                        label="Data de Nascimento"
                        name="dataNascimento"
                        type="date"
                        spellCheck={true}
                        required={true}
                        placeholder=""

                        
                        />
                    <TextField label="Senha" name="email" type="password" spellCheck={true} required={true} />
                    <TextArea placeholder="Bio" />
                    <SelectField options={fieldsSelect} />
                    <Button className="btn-home">Cadastrar</Button>
                    <CheckBox label="Desejo receber notificações" name="notificacoes" required={true} />
                    </div>
                </Card>

                <div className="box-img">
                    <h2>Teste técnico</h2>
                    <hr className="line" />
                    <h3>
                        Controle suas contas nacionais
                        <br />e internacionais em um único lugar!
                    </h3>
                </div>
            </ContainerHome>
        </>
       
    );
}

export default Home
