import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

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
    TransactionList,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TranscationCard } from '../../components/TranscationCard';

export function Dashboard() {
    const data = [
        {
            type: 'positive',
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign',
            },
            date: '11/07/2022',
        },
        {
            type: 'negative',
            title: 'Hamburgueria',
            amount: 'R$ 50,00',
            category: {
                name: 'Vendas',
                icon: 'coffee',
            },
            date: '11/07/2022',
        },
        {
            type: 'negative',
            title: 'Aluguel',
            amount: 'R$ 1000,00',
            category: {
                name: 'Vendas',
                icon: 'shopping-bag',
            },
            date: '11/07/2022',
        },
        {
            type: 'positive',
            title: 'Recebidos',
            amount: 'R$ 500,00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign',
            },
            date: '11/07/2022',
        },
    ];

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

                <TransactionList
                    data={data}
                    renderItem={({ item }) => <TranscationCard
                        data={item}
                    />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: getBottomSpace(),
                    }}
                />
            </Transactions>
        </Container>
    );
}