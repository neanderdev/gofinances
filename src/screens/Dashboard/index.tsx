import React from 'react';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreenting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TranscationCard } from '../../components/TranscationCard';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: "https://github.com/neanderdev.png" }}
                        />

                        <User>
                            <UserGreenting>Olá,</UserGreenting>
                            <UserName>Neander</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    type='up'
                    title='Entrada'
                    amount='R$ 17.400,00'
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <HighlightCard
                    type='down'
                    title='Saída'
                    amount='R$ 1.259,00'
                    lastTransaction='Última saída dia 03 de abril'
                />
                <HighlightCard
                    type='total'
                    title='Total'
                    amount='R$ 16.141,00'
                    lastTransaction='01 à 16 de abril'
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TranscationCard />
            </Transactions>
        </Container>
    );
}