import React, {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

export default class Detalles extends Component {
    render() {
        const {params} = this.props.route;
        return ( 
            <View style={styles.item}>
                <Text style={styles.title}>{params.itemObject.title}</Text>
                <Image source={{uri:params.itemObject.small_cover_image}} style={{height: 100, width: 100}} />
                <Text style={styles.summary}>{params.itemObject.summary}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 25,
    },
    summary: {
        fontSize: 18,
    },
});