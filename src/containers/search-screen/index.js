import { isTemplateElement } from '@babel/types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import { styles } from './style'
import { Svgs } from '../../assets/images'
export const SearchScreen = () => {
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([])
    const [masterData, setMasterData] = useState([])

    const searchFilterApi = async (characterName) => {
        const response = await axios.get(`https://WWW.breakingbadapi.com/api/characters?name=${search}`).catch((err) => {
            console.log('err', err)
        })
        setFilterData(response.data)
        setMasterData(response.data)
    }
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setFilterData(newData)
            setSearch(text)
        } else {
            setFilterData(masterData)
            setSearch(text)
        }
    }
    useEffect(() => {
        searchFilterApi()
    }, [])
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
        <SafeAreaView style={styles.container}>
            <View >
                <TextInput style={styles.inputSearch} placeholder="Search" value={search}
                    onChangeText={(value) => searchFilter(value)} />
            </View>
            <FlatList
                data={filterData}
                renderItem={renderBreakingBadCharacterList}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
        </SafeAreaView>
    )
}