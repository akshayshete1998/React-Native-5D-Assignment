import React, { useEffect } from 'react'
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Svgs } from '../../assets/images'

export const CharacterDetails = ({ selectedCharacter, navigation }) => {
    const { char_id, img, name, nickname, appearance, occupation, portrayed, status, birthday } = selectedCharacter
    const goToBackScreen = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground style={styles.imageBackgroundWrapper} resizeMode="cover" source={{ uri: img }}>
                    <View style={{ margin: 20 }}>
                        <View style={styles.iconsOnImg}>
                            <TouchableOpacity onPress={() => goToBackScreen()}>
                                <IconAntDesign name="arrowleft" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Svgs.FILLED_HEART width={30} height={40} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={{ uri: img }} resizeMode='center' style={{ height: 200, width: 200, marginTop: 120, borderRadius: 5 }} />
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.characterName}>{name}</Text>
                            <Text style={styles.textColor}>{nickname}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.characterDetailsSection}>
                    <View style={styles.portrayedTextWrapper}>
                        <View>
                            <Text style={styles.potaryedText}>Potrayed</Text>
                            <Text style={styles.normalText}>{portrayed}</Text>
                        </View>
                        <View style={styles.birthdayText}>
                            <Text style={styles.textColor}>{birthday == 'Unknown' ? '09-July-1958' : birthday}</Text>
                            <Icon name="gift" size={20} color="#FFFFFF" />
                        </View>
                    </View>
                    <View style={styles.occupationStyle}>
                        <Text style={styles.potaryedText}>Occupation</Text>
                        <Text style={styles.normalText}>{occupation}</Text>
                    </View>
                    <View style={styles.appearedWrapper}>
                        <Text style={styles.potaryedText}>Appeared in</Text>
                        <View style={styles.appearedInBoxWrapper}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {appearance.map((seasonNumber) => (
                                    <View style={styles.appearedBox}>
                                        <Text style={styles.normalText}>Season {seasonNumber}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                    <View>
                        <View style={styles.otherCharacterTextWrapper}>
                            <Text style={styles.otherCharaterText}>Other characters</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}