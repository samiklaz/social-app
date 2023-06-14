import { 
    StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    Image, 
    Dimensions, 
    ScrollView,
    TouchableOpacity
} from 'react-native'
import React from 'react'

const h = Dimensions.get("window").height
const w = Dimensions.get("window").width

const ProfileDetail = ({navigation}) => {
  return (
    <ScrollView style={{
        backgroundColor: "#FFF"
    }}>
        <ImageBackground 
            source={require("../../assets/photo2.png")}
            style={{
                height: 0.5 * h
            }}
        >
            <View style={{ 
                flexDirection: "row", 
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginTop: 40,
                alignItems: "center"
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image source={require("../../assets/icons-back-light.png")} />
                </TouchableOpacity>

                <Image source={require("../../assets/filter.png")} />
            </View>

            <View style={{
                alignItems: "center",
                alignSelf: "center",
                marginTop: 0.17 * h,
            }}>
                <Image 
                    source={require("../../assets/avatar.png")}
                    style={{width: 50, height: 50}}
                />
                <Text style={{
                    fontSize: 20,
                    fontFamily: "Montserrat_700Bold",
                    color: "#FFF",
                    marginTop: 20,
                }}>Asuquo Samuel</Text>
                <Text style={{
                    fontSize: 18,
                    fontFamily: "Montserrat_400Regular",
                    color: "#FFF",
                }}>120 Followers</Text>
            </View>
        </ImageBackground>

        <View style={{
            backgroundColor: "#FFF",
            marginTop: -50,
            borderRadius: 50,
            flex: 1,
            alignItems: "center",
        }}>
            <Text style={{
                color: "#000",
                fontSize: 18,
                fontFamily: 'Montserrat_600SemiBold',
                marginTop: 30,
            }}>Photos & Videos</Text>

            <Text style={{
                color: "#998FA2",
                fontSize: 18,
                fontFamily: "Montserrat_400Regular",
            }}>
                260 Shots
            </Text>

            <View style={{
                flexDirection: "row",
                marginTop: 20
            }}>

                <Image 
                    source={require("../../assets/photo3.png")} 
                    style={{
                        borderTopLeftRadius: 40,
                        marginRight: 25,
                        borderBottomLeftRadius: 40,
                    }}
                />

            <View>
                <Image 
                    source={require("../../assets/photo5.png")} 
                    style={{
                        borderTopRightRadius: 40
                    }}
                />

                
                    <Image 
                        source={require("../../assets/photo6.png")} 
                        style={{
                            marginTop: 10,borderBottomRightRadius: 40,

                        }}
                    />
                </View>

            </View>

        </View>
    </ScrollView>
  )
}

export default ProfileDetail

const styles = StyleSheet.create({})