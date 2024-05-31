import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const products = [
    { id: '1', name: 'Producto 1', description: 'Descripción del producto 1' },
    { id: '2', name: 'Producto 2', description: 'Descripción del producto 2' },
    { id: '3', name: 'Producto 3', description: 'Descripción del producto 3' },
];

export const Product = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={styles.product}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text>Bienvenido a mi tienda, soy Joao Rodriguez</Text>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button
                title='HOME'
                onPress={() => {
                    navigation.navigate('WelcomeNav');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DA3232',
        alignItems: 'center',
        justifyContent: 'center',
    },
    product: {
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 5,
        width: '90%',
        alignItems: 'center',
        borderRadius: 5,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 14,
        color: '#555',
    },
});
