import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispach = useDispatch();

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="p-5">
                <Image source={{ uri: "https://links.papareact.com/gzs" }}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }} />
                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details ) => {
                        dispach(
                            setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }))
                        dispach(setDestination(null));
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{ key: GOOGLE_MAPS_APIKEY, language: 'lt' }}
                    placeholder='Where from?'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
                <NavOptions />
                <NavFavourites />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen