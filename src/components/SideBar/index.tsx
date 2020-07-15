import React from 'react';
//import { View } from 'react-native';

import StickyBox from 'react-sticky-box';

import { Container,
         SearchWrapper,
         SearchInput,
         SearchIcon,
         Body } from './styles';

import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import List from '../List';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Busca no Twitter" />
                <SearchIcon/>
          </SearchWrapper>

    <StickyBox>
        <Body>
            <List 
                title="Talvez você curta" 
                elements={
                    [
                        <FollowSuggestion 
                            name="Diego de Jesus"
                            nickname="@duffyind"
                        />,
                        <FollowSuggestion 
                            name="Diego de Jesus"
                            nickname="@duffyind"
                        />,
                        <FollowSuggestion 
                            name="Diego de Jesus"
                            nickname="@duffyind"
                        />
                    ]
                }
            />

            <List title="Talvez você curta"  elements={[ <News/>, <News/>, <News/>]} />
            <List title="Talvez você curta"  elements={[ <News/>, <News/>, <News/>]} />
        </Body>
    </StickyBox>

      </Container>
  );
}

export default SideBar;