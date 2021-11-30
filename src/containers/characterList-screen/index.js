import React, { useEffect } from 'react'
import axios from 'axios'
import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import { CharacterList } from '../../components/charactersList'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Svgs } from '../../assets/images/index'

export const CharacterListScreen = ({ navigation }) => {

    useEffect(() => {
    }, [])
    const goTOFavorite = () => {
        navigation.navigate('Favorites')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeScreenWrapper}>
                <View>
                    <Text style={styles.breakingPadTitle}>The Breaking bad</Text>
                </View>
                <View style={styles.searchIconWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Icon name="search" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => goTOFavorite()}>
                        <Svgs.FILLED_HEART width={30} height={40} />
                    </TouchableOpacity>
                </View>
            </View>
            <CharacterList navigation={navigation} />
        </SafeAreaView>
    )
}
