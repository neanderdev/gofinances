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
    TransactionList,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TranscationCard, TransactionCardProps } from '../../components/TranscationCard';

export interface DataListProps extends TransactionCardProps {
    id: number;
}

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
            type: 'negative',
            title: 'Aluguel',
            amount: 'R$ 1000,00',
            category: {
                name: 'Vendas',
                icon: 'shopping-bag',
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
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <TranscationCard
                        data={item}
                    />
                    }
                />
            </Transactions>
        </Container>
    );
}