import type { NextPage } from 'next'
import Image from 'next/image';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IFormInput } from '../@types/User';

import Button from '../components/Button'
import CheckBox from '../components/CheckBox';
import SelectField from '../components/SelectField';
import TextArea from '../components/TextArea';
import TextField from '../components/TextField';
import { useUser } from '../Hooks/useUser';
import { BgGlobe, Card, ContainerHome } from './Home/styles';







const Home: NextPage = () => {


    // set initial value input date empty
    


    let fieldsSelect = [
        { value: 0, label: 'Selecione seu país', disabled: true, selected: true },
        { value: 1, label: 'Brasil' },
        { value: 2, label: 'Estados Unidos' },
        { value: 3, label: 'Inglaterra' }
    ];


    const {handleSubmit, register,control, formState: { errors }} = useForm<IFormInput>({});


    const {createUser} = useUser();

    const onSubmit = (data: IFormInput) => {
        if(data){
            createUser(data);
            
        }

         
    }

    return (
        <>
            <ContainerHome>
                <Card>
                    <div className="content-card">
                        <h5> Cadastre-se</h5>
                        <h6>Para começar, insira os dados abaixo:</h6>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                label="Nome"
                                type="text"
                                spellCheck={true}
                                {...register('firstName', {
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
                                        message: 'Nome inválido, apenas letras'
                                    }
                                })}
                                errorMessage={errors.firstName?.message}
                            />

                            <TextField
                                label="Sobrenome"
                                // name="sobrenome"
                                type="text"
                                spellCheck={true}
                                // required={true}
                                {...register('lastName', {
                                    required: 'Campo obrigatório',
                                    minLength: {
                                        value: 3,
                                        message: 'Mínimo de 3 caracteres'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: 'Sobrenome inválido, apenas letras'
                                    }
                                })}
                                errorMessage={errors.lastName?.message}
                            />
                            <TextField
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
                                errorMessage={errors.email?.message}
                            />
                            <TextField
                                label="Data de nascimento"
                                // name="dataNascimento"
                                type="date"
                                spellCheck={true}
                                required={true}
                                {...register('dateOfBirthday', {
                                    required: 'Campo obrigatório',
                                    pattern: {
                                        // regex date yyyy-mm-dd
                                        value: /^(19[5-9][0-9]|20[0-4][0-9]|2050)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
                                        message: 'Data inválida'
                                    }
                                })}
                                errorMessage={errors.dateOfBirthday?.message}
                            />
                            <TextField
                                label="Senha"
                                type="password"
                                spellCheck={true}
                                {...register('password', {
                                    required: 'Campo obrigatório',
                                    minLength: {
                                        value: 6,
                                        message: 'Mínimo de 6 caracteres'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/i,
                                        message: 'Senha inválida, mínimo de 6 caracteres, pelo menos uma letra e um número, pelo menos um caracteres especial'
                                    }
                                })}
                                errorMessage={errors.password?.message}
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
                                errorMessage={errors.bio?.message}
                            />
                            <SelectField
                                options={fieldsSelect}
                                {...register('country', {
                                    required: 'Campo obrigatório'
                                })}
                            />

                            <Button
                                className="btn-home"
                                type="submit"
                                disabled={
                                    errors.firstName?.message ||
                                    errors.lastName?.message ||
                                    errors.email?.message ||
                                    errors.dateOfBirthday?.message ||
                                    errors.password?.message ||
                                    errors.bio?.message ||
                                    errors.country?.message
                                        ? true
                                        : false
                                }
                            >
                                Cadastrar
                            </Button>
                            <CheckBox label="Desejo receber notificações"  {...register('receiveNotifications')} />
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
