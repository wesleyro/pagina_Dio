import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'
import minha from '../../assets/minha-foto.jpg';

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://hermes.digitalinnovation.one/articles/cover/8dd9f416-e381-4a30-b148-76bdc9e42cc3.png"/>
      <Content>
        <UserInfo>
          <UserPicture src={minha}/>
         <div>
          <h4>Pablo Henrique</h4>
          <p>Há 8 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
