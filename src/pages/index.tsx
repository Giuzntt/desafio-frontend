import type { NextPage } from 'next'
import Image from 'next/image';
import Button from '../components/Button'
import CheckBox from '../components/CheckBox';
import SelectField from '../components/SelectField';
import { TextArea } from '../components/TextArea';
import TextField from '../components/TextField';
import { BgGlobe, Card, ContainerHome } from './Home/styles';



const Home: NextPage = () => {



    let fieldsSelect = [
        { value: '0', label: 'Selecione seu país' },
        { value: '1', label: 'Brasil' },
        { value: '2', label: 'Estados Unidos' },
        { value: '3', label: 'Inglaterra' },
    ]

    return (
        <BgGlobe>
            <ContainerHome>
                <Card>
                    <h5> Cadastre-se</h5>
                    <h6>Para começar, insira os dados abaixo:</h6>
                    <TextField label="Nome" name="nome" type="text" spellCheck={true} required={true} />
                    <TextField label="Sobrenome" name="sobrenome" type="text" spellCheck={true} required={true} />
                    <TextField label="E-mail" name="email" type="email" spellCheck={true} required={true} />
                    <TextField
                        label="Data de Nascimento"
                        name="email"
                        type="date"
                        spellCheck={true}
                        required={true}
                        // remove value from input date
                        value={undefined}
                    />
                    <TextField label="Senha" name="email" type="password" spellCheck={true} required={true} />
                    <TextArea placeholder="Bio" />
                    <SelectField options={fieldsSelect} />
                    <Button className="btn-home">Cadastrar</Button>
                    <CheckBox label="Desejo receber notificações" name="aceitoTermos" required={true} />
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
        </BgGlobe>
    );
}

export default Home
