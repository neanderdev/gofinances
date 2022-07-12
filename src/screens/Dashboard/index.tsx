import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreenting,
    UserName,
    LogoutButton,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
    LoadContainer,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TranscationCard, TransactionCardProps } from '../../components/TranscationCard';

interface HighlightProps {
    amount: string;
}

interface HighlightData {
    entries: HighlightProps;
    expensive: HighlightProps;
    total: HighlightProps;
}

export interface DataListProps extends TransactionCardProps {
    id: number;
}

export function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);

    const theme = useTheme();

    async function loadTransactions() {
        const dataKey = '@gofinances:transactions';

        const response = await AsyncStorage.getItem(dataKey);

        const transactions = response ? JSON.parse(response) : [];

        let entriesSum = 0;
        let expensiveTotal = 0;

        const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {
            if (item.type === "positive") {
                entriesSum += Number(item.amount);
            }

            if (item.type === "negative") {
                expensiveTotal += Number(item.amount);
            }


            const amount = Number(item.amount).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            });

            const date = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
            }).format(new Date(item.date));

            return {
                id: item.id,
                name: item.name,
                amount,
                type: item.type,
                category: item.category,
                date,
            };
        });

        let total = entriesSum - expensiveTotal;

        setTransactions(transactionsFormatted);
        setHighlightData({
            entries: {
                amount: entriesSum.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }),
            },
            expensive: {
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }),
            },
            total: {
                amount: total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }),
            }
        });

        setIsLoading(false);
    }

    useEffect(() => {
        loadTransactions();
    }, []);

    useFocusEffect(useCallback(() => {
        loadTransactions();
    }, []));

    return (
        <Container>
            {isLoading ? (
                <LoadContainer>
                    <ActivityIndicator
                        color={theme.colors.primary}
                        size="large"
                    />
                </LoadContainer>
            ) : (
                <>
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

                            <LogoutButton onPress={() => { }}>
                                <Icon name="power" />
                            </LogoutButton>
                        </UserWrapper>
                    </Header>

                    <HighlightCards>
                        <HighlightCard
                            type='up'
                            title='Entrada'
                            amount={highlightData.entries.amount}
                            lastTransaction='Última entrada dia 13 de abril'
                        />
                        <HighlightCard
                            type='down'
                            title='Saída'
                            amount={highlightData.expensive.amount}
                            lastTransaction='Última saída dia 03 de abril'
                        />
                        <HighlightCard
                            type='total'
                            title='Total'
                            amount={highlightData.total.amount}
                            lastTransaction='01 à 16 de abril'
                        />
                    </HighlightCards>

                    <Transactions>
                        <Title>Listagem</Title>

                        <TransactionList
                            data={transactions}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => <TranscationCard
                                data={item}
                            />
                            }
                        />
                    </Transactions>
                </>
            )}
        </Container>
    );
}