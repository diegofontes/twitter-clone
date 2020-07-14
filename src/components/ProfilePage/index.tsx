import React from 'react';

import { Container,
         Banner,
         Avatar,
         ProfileData,
         Location,
         CakeIcon,
         Followage,
         EditButton } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
        <Container>
            <Banner>
                <Avatar/>
            </Banner>

            <ProfileData>
                 <EditButton outlined> Editar perfil </EditButton> 
                <h1>Diego Fontes</h1>
                <h2>@Duffyind</h2>
                <p>
                    Dev  <a href="https://secunix.com.br">Secunix</a>
                </p>
                <ul>
                    <li>
                        <Location />
                        São Paulo Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 19/04/2020
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                         <strong>5000</strong> seguindores
                    </span>                   
                </Followage>

            </ProfileData>

            <Feed/>

        </Container>

  );
}

export default ProfilePage;