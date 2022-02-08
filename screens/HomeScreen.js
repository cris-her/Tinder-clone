import { Button, View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>I am the home screen</Text>
            <Button title="Go to Chat Screen" onPress={() => navigation.navigate("Chat")}/>
        </View>
    );
};

export default HomeScreen;
