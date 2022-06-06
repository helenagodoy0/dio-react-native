import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';


const imageProfileGithub = 'https://avatars.githubusercontent.com/u/103142238?v=4';

const urlToMyGithub = 'https://github.com/helenagodoy0';

const App = () => {

    const handlePressGoToGithub = async() => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res) {
            console.log('Link aprovado');
            console.log('Abrindo link...');
            await Linking.openURL(urlToMyGithub);
        }
    }   
    return( 
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style={style.content}>
            <Image accessibilityLabel='Helena com fundo branco' 
            style={style.avatar} 
            source={{uri: imageProfileGithub}} 
        />
        <Text
        accessibilityLabel="Nome: Helena Godoy" 
        style={[style.defaultText, style.name]}>
        Helena Godoy
        </Text>
        <Text
        accessibilityLabel="Nickname: helenagodoy0" 
        style={[style.defaultText, style.nickname]}>
        helenagodoy0
        </Text>
        <Text 
        accessibilityLabel="Descrição: Data Science Student"
        style={[style.defaultText, style.description]}>
        Data Science Student
        </Text>

        <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>
                Open in GitHub
                </Text>
            </View>
        </Pressable>
        </View> 
        
    </SafeAreaView>
    ); 
};

export default App;

const style = StyleSheet.create({
    container: { //começam como colunas
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});