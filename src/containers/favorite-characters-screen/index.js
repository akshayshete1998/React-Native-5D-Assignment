import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import { CharacterList } from '../../components/charactersList';

export const FavoriteCharactersScreen = ({ navigation }) => {
    const allBreakBadCharacters = useSelector((state) => state.allCharacters.characters)
    return (
        <SafeAreaView style={styles.container}>
            <View styles={styles.favoriteScreenWrapper}>
                <View style={styles.favoriteHeader}>
                    <View>
                        <Text style={styles.favouritesText}> Favourites </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View>
                            <Icon name="cross" size={30} color="#FFFFFF" />
                        </View>
                    </TouchableOpacity>
                </View>
                <CharacterList />
            </View>
        </SafeAreaView>
    )
}