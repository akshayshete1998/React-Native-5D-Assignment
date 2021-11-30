import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CharacterDetails } from '../../components/characterDetails/index'
import { styles } from './style'
import { CharacterList } from '../../components/charactersList'


export const CharactersDetailsScreen = ({ route, navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.characterDetailsWrapper}>
                <ScrollView>
                    <View>
                        <CharacterDetails navigation={navigation} selectedCharacter={route.params.character} />
                    </View>
                    <View>
                        <CharacterList navigation={navigation} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}