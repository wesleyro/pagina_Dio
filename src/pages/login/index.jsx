import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { ErroText } from "../../components/Input/styles";
import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';


const Login = () => {

    const navigate = useNavigate()

    const handleClickSignInCa = () => {
        navigate('/cadastro')
    }
    const handleClickSign = () => {
        navigate('/feed')
    }

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange'
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length === 2){//===1
                return handleClickSign() 
               
            }else{
                return alert('Usuário ou senha inválido')
            }


        }catch(e){
           alert('Houve um erro,tente novamente');
        }
        // onClick={handleClickSign} 
    };


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu Login</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <ErroText>E-mail é obrigatório</ErroText>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <ErroText>Senha é obrigatório</ErroText>}
                    <Button title="Entrar" variant="secondary" type="submit" />
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={handleClickSignInCa} >Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }