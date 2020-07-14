import React from 'react';


 import { Container,
         Retweeted,
         RandomIcon,
         Body,
         Avatar,
         Content,
         Header,
         Dot,
         Description,
         ImagemContent,
         Icons,
         Status,
         ComentIcon,
         RetweetIcon,
         LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
        <Container>
            <Retweeted>
                <RandomIcon /> 
                    Você retweetou
            </Retweeted>

                <Body>
                    <Avatar />

                        <Content>
                            <Header>
                                <strong>Diego Fontes</strong>
                                <span>@duffyind</span>
                                <Dot/>
                                <time>14 de julh</time>
                            </Header>

                            <Description> Foguete não tem ré </Description>

                            <ImagemContent /> 

                            <Icons>
                                <Status> 
                                    <ComentIcon /> 
                                    18
                                </Status>
                                <Status> 
                                    <RetweetIcon /> 
                                    18
                                </Status>
                                <Status> 
                                    <LikeIcon /> 
                                    999
                                </Status>
                            </Icons>
                        </Content> 

                </Body>

        </Container>
  );
}

export default Tweet;