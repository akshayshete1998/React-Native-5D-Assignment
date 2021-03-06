import React, { useEffect, useState } from 'react'
import { View, Text, Button, SafeAreaView, ScrollView, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import axios from 'axios'

import { styles } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { setCharacters, setFavorites } from '../../redux/actions/characterList'
import { Svgs } from '../../assets/images'

export const CharacterList = ({ navigation }) => {
    let favouriteCharacters = []
    const [favorite, setFavorite] = useState(false)
    const allBreakBadCharacters = useSelector((state) => state.allCharacters.characters)
    const dispatch = useDispatch()
    const getApiData = async () => {
        const response = await axios.get('https://WWW.breakingbadapi.com/api/characters').catch((err) => {
            console.log('err', err)
        })
        response.data && response.data.forEach((character) => {
            character['isFavorite'] = false

        });
        // setFavorite(item.isFavorite = !item.isFavorite)
        dispatch(setCharacters(response.data))
    }
    useEffect(() => {
        getApiData()
        favouriteCharacters = []
    }, [favorite])

    const addToFavorite = (item) => {
        if ('isFavorite' in item) {
            item.isFavorite = !item.isFavorite
        }
        if (item.isFavorite) {
            favouriteCharacters.push(item)
        } else {
            favouriteCharacters.pop(item)
        }
        setFavorite(item.isFavorite)
    }
    const renderBreakingBadCharacterList = ({ item, index }) => {
        const { listWrapper, textColorOfCharacter } = styles
        return (
            <View style={[listWrapper]} key={item.char_id}>
                <View style={styles.cardWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { characterId: item.char_id, character: { ...item } })}>
                        <View>
                            <Image source={{ uri: item.img }} style={styles.imgDimestion} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.flexRow}>
                        <View style={styles.textWrapper}>
                            <Text ellipsizeMode='tail' numberOfLines={1} style={textColorOfCharacter}>{item.name}</Text>
                            <Text style={styles.nameWrapper}>{item.nickname}</Text>
                        </View>
                        <TouchableOpacity onPress={() => { addToFavorite(item) }}>
                            <View>
                                {
                                    item.isFavorite === true ? <Svgs.FILLED_HEART width={30} height={40} /> : <Svgs.EMPTY_HEART width={30} height={40} />
                                }

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView >
            <View>
                <FlatList
                    data={allBreakBadCharacters}
                    renderItem={renderBreakingBadCharacterList}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}