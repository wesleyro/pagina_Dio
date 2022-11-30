
import { MdEmail,MdLock,MdPermIdentity } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';


import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleLogin, SubtitleLogin, CriarText, Row, Wrapper,TextoDetalhe,CriarTexto} from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
    }

    

    const { control } = useForm({

    });
   


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Começa agora grátis</TitleLogin>
                <SubtitleLogin>Cria sua conta e make the change.</SubtitleLogin>
                <form >
                    <Input placeholder="Nome completo" leftIcon={<MdPermIdentity />} name="Nome Completo"  control={control} />
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    <Button title="Criar minha conta" variant="secondary" type="submit" onClick={handleClickSignIn}/>
                </form>
                    <TextoDetalhe>
                        Ao clicar em "criar minha conta grátis",declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO
                    </TextoDetalhe>
       

                <Row>
                    
                    <CriarTexto>Ja tenho conta</CriarTexto>
                    <CriarText onClick={handleClickSignIn} >login</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }