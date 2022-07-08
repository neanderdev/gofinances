import React from 'react';
import {
    View,
    Text,
} from 'react-native';

interface WelcomeProps {
    title: string;
}

export function Welcome({ title }: WelcomeProps) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}