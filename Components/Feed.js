import React,{ useState,useEffect } from 'react';
import { StyleSheet,ScrollView, Text,View, Alert, Pressable,Image,SafeAreaView } from 'react-native';
import axios from "axios";



/*const api = axios.create({
    baseURL: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4AaP8qvtazEx9QXoQn4LIAlEbcGNpD3M`

});*/




const NewsInfo = [

    {key:1,title:"new forces into ukraine",image:"https://images.moneycontrol.com/static-mcnews/2022/02/Russia-Ukraine-generic.jpg"},
    {key:2,title:"new forces into ukraine",image:"https://images.moneycontrol.com/static-mcnews/2022/02/Russia-Ukraine-generic.jpg"},
    {key:3,title:"new forces into ukraine",image:"https://images.moneycontrol.com/static-mcnews/2022/02/Russia-Ukraine-generic.jpg"},
    {key:4,title:"new forces into ukraine",image:"https://images.moneycontrol.com/static-mcnews/2022/02/Russia-Ukraine-generic.jpg"},
    {key:5,title:"new forces into ukraine",image:"https://images.moneycontrol.com/static-mcnews/2022/02/Russia-Ukraine-generic.jpg"},
    


];

const baseURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4AaP8qvtazEx9QXoQn4LIAlEbcGNpD3M";

export default function TopNewsFeed(){

    const [news,setNews] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setNews(response.data.results);
         
        });
      }, []);
    
      if (!news) return null;
    
      
      return (
        <View>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Top News of The day</Text>
                    <ScrollView style={{height:'100%',marginBottom:'-36%'}}>
                        {
                            <View>
                                    <View key={news[1].url} style={styles.container}>
                                        <Image source={{uri:`${news[1].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[1].abstract}</Text>
        
                                    </View>

                                    <View key={news[0].url} style={styles.container}>
                                        <Image source={{uri:`${news[0].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[0].abstract}</Text>
        
                                    </View>
                                    <View key={news[2].url} style={styles.container}>
                                        <Image source={{uri:`${news[2].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[2].abstract}</Text>
        
                                    </View>
                                    <View key={news[3].url} style={styles.container}>
                                        <Image source={{uri:`${news[3].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[3].abstract}</Text>
        
                                    </View>
                                    <View key={news[4].url} style={styles.container}>
                                        <Image source={{uri:`${news[4].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[4].abstract}</Text>
        
                                    </View>
                                    <View key={news[5].url} style={styles.container}>
                                        <Image source={{uri:`${news[5].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[5].abstract}</Text>
        
                                    </View>
                                    <View key={news[6].url} style={styles.container}>
                                        <Image source={{uri:`${news[6].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[6].abstract}</Text>
        
                                    </View>
                                    <View key={news[7].url} style={styles.container}>
                                        <Image source={{uri:`${news[7].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[7].abstract}</Text>
        
                                    </View>
                                    <View key={news[8].url} style={styles.container}>
                                        <Image source={{uri:`${news[8].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[8].abstract}</Text>
        
                                    </View>
                                    <View key={news[9].url} style={styles.container}>
                                        <Image source={{uri:`${news[9].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[9].abstract}</Text>
        
                                    </View>
                                    <View key={news[10].url} style={styles.container}>
                                        <Image source={{uri:`${news[10].multimedia[1].url}` }}
                                            style={{width: '90%', height: 200,borderRadius:20,marginLeft:'5%',marginRight:'5%'}} />
                                        <Text style={styles.info}>{news[10].abstract}</Text>
        
                                    </View>
                            </View>
                            
                        }
                    </ScrollView>

                </View>
      );
    
};


const styles = StyleSheet.create({

    container: {
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        marginTop: '5%',


    },

    info:{
            marginTop: '2%',
            fontSize:15,
            marginLeft: '2%'

    }

});