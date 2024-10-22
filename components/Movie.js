import {Image, Text, View, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import  React  from 'react';



const Movie = ({title, year, icon_name, poster})=> {
    return(
        <View>
        <Image source={poster} style={{width:400, height:500}}/>
        <Text>
            {title} {year}
        </Text>
    <Icon name={icon_name} size={20} color="#B23B23"/>
        </View>
    );
};

const display =() => {
    return(
        <ScrollView>
            <Movie title="Doctor Sleep" Year={2019} icon_name={"skull"} poster={require('../img/doctor-sleep.jpg')}/>
            <Movie title="Test 1" Year={2018} icon_name={"skull"} poster={require('../img/flipper.jpg')}/>
            <Movie title="Test 2" Year={2017} icon_name={"skull"} poster={require('../img/sea_ray.jpg')}/>

        </ScrollView>
    )
}
export  default  display;
