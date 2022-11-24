import type { NextPage } from 'next'
import Image from 'next/image';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../components/Button'
import CheckBox from '../components/CheckBox';
import SelectField from '../components/SelectField';
import TextArea from '../components/TextArea';
import TextField from '../components/TextField';
import { BgGlobe, Card, ContainerHome } from './Home/styles';


export interface IFormInput {
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: string;
    senha: string;
    bio: string;
    localidade: string;
    notificacoes: boolean;
}



const Home: NextPage = () => {


    // set initial value input date empty
    const [date, setDate] = useState('');


    let fieldsSelect = [
        { value: '0', label: 'Selecione seu país' },
        { value: '1', label: 'Brasil' },
        { value: '2', label: 'Estados Unidos' },
        { value: '3', label: 'Inglaterra' },
    ]


    const {handleSubmit, register,control, formState: { errors }} = useForm<IFormInput>({});


    const onSubmit = (data: IFormInput) => {
        console.log(data);
    }

    return (
        <>
            <ContainerHome>
                {/* <BgGlobe/> */}
                <Card>
                    <div className="content-card">
                        <h5> Cadastre-se</h5>
                        <h6>Para começar, insira os dados abaixo:</h6>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                label="Nome"
                                type="text"
                                spellCheck={true}
                                
                                {...register('nome',{
                                    required: 'Campo obrigatório',
                                    minLength: {
                                        value: 3,
                                        message: 'Mínimo de 3 caracteres'
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'Máximo de 20 caracteres'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: 'Somente letras'
                                    }})


                            }
                            />

                            {/* <TextField
                                label="Sobrenome"
                                // name="sobrenome"
                                type="text"
                                spellCheck={true}
                                // required={true}
                                {...register('sobrenome', {
                                    required: 'Campo obrigatório',
                                    minLength: {
                                        value: 3,
                                        message: 'Mínimo de 3 caracteres'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: 'Somente letras'
                                    }
                                })}
                            /> */}
                            {/* <TextField
                                label="E-mail"
                                type="email"
                                spellCheck={true}
                                {...register('email', {
                                    required: 'Campo obrigatório',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'E-mail inválido'
                                    }
                                })}
                            /> */}
                            {/* <TextField
                                label="Data de nascimento"
                                // name="dataNascimento"
                                type="date"
                                spellCheck={true}
                                required={true}
                                {...register('dataNascimento', {
                                    required: 'Campo obrigatório',
                                    pattern: {
                                        value: /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/i,
                                        message: 'Data inválida'
                                    }
                                })}
                            /> */}
                            {/* <TextField
                                label="Senha"
                                type="password"
                                spellCheck={true}
                                {...register('senha', {
                                    required: 'Campo obrigatório',
                                    minLength: {
                                        value: 6,
                                        message: 'Mínimo de 6 caracteres'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i,
                                        message: 'Mínimo de 6 caracteres, pelo menos uma letra e um número'
                                    }
                                })}
                            />
                            <TextArea
                                placeholder="Bio"
                                {...register('bio', {
                                    required: 'Campo obrigatório',
                                    minLength: {
                                        value: 10,
                                        message: 'Mínimo de 10 caracteres'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: 'Somente letras'
                                    }
                                })}
                            />
                            <SelectField options={fieldsSelect} {...register('localidade')} /> */}
                            <Button className="btn-home" type="submit">
                                Cadastrar
                            </Button>
                            {/* <CheckBox label="Desejo receber notificações" required={true} {...register('notificacoes')} /> */}
                        </form>
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
