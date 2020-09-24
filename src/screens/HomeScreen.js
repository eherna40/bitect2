import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Modal, Text, TouchableOpacity, TextInput } from 'react-native'
// import Header from '../components/Header'
import { Flex, Fonts, Paddings, Margins } from '../infraestructure/Theme'
import { HEADER_HEIGHT } from '../infraestructure/constants'
// // import Video from 'react-native-video';
// import HeaderModal from '../components/Header/HeaderModal'
// import Category from '../components/Home/Category'
// import { FlatList } from 'react-native-gesture-handler'
// import CVideo from '../components/Listing/Miniature/CVideo'
// import HVideo from '../components/Home/HVideo'
// import TabViewWrapper from '../components/Home/Tabs.view'
// import MainVideo from '../components/Home/MainVideo'
// import { selectTablet } from '../infraestructure/api/API'
// import { StorageService, DownloadService } from '@common';
// import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import MainVideo from '../components/Home/MainVideo';
import TabView from '../components/Home/Tabs.view';
import ZendeskChat from "react-native-zendesk-chat";
import Chat from '../components/Chat/Chat';
import ChatButton from '../components/ChatButton/ChatButton';

// const { height } = Dimensions.get('window');

// const initialLayout = { width: Dimensions.get('window').width };

// const STORAGE_TABLE = '@storage_table';
// const STORAGE_VIDEOS = '@storage_videos';
// const STORAGE_CAMPAIGN = '@storage_campaign';
ZendeskChat.init("36ead481-7d6e-4f41-a70a-16e302850937");
const HomeScreen = ({ navigation, route, videos }) => {
    let time = null

    // const refVideo = useRef(null);
    // const [index, setIndex] = React.useState(0);
    // const [routes, setRoutes] = React.useState([]);
    const [open, setOpen] = useState({
        link: '',
        visible: false,
        repeat: true
    })

    const [chat, setchat] = useState(false)

    useEffect(() => {
        console.log(ZendeskChat.getConstants(), '------')

    }, [])

    useEffect(() => {
        if (videos && videos.path)
            setOpen({
                visible: true,
                link: videos.path,
                repeat: true
            })
        setchat(false)
    }, [])

    useEffect(() => {
        if (!open.visible && !chat)
            time = setTimeout(() => {
                if (!open.visible) {
                    setchat(false)
                    setOpen({ visible: true, link: videos.path, repeat: true })
                }
            }, 10000);
        else
            clearTimeout(time)
    }, [open.visible])

    // const { reload } = route.params

    // const [selected, setselected] = useState({})
    // const [stopInitLoad, setStopInitLoad] = useState(false)
    // const [parent, setParent] = useState(null)
    // const [videos, setVideos] = useState([])
    // const [visibleDownload, setVisibleDownload] = useState(true)


    // const initLoad = async () => {
    //     setStopInitLoad(true);
    //     //await StorageService.removedStoredData(STORAGE_VIDEOS);
    //     let forceReload = false;
    //     const storedID = await StorageService.getStoredData(STORAGE_TABLE);
    //     const {status, data} = await selectTablet(storedID);
    //     await StorageService.storeData(STORAGE_CAMPAIGN, data.id);
    //     const campaign = await StorageService.getStoredData(STORAGE_CAMPAIGN);

    //     if (campaign && data.id.toString() !== campaign.toString()) {
    //         console.log("here");
    //         await DownloadService.removeFiles(data, storedID);
    //         await StorageService.storeData(STORAGE_CAMPAIGN, data.id);
    //         forceReload = true;
    //     }

    //     if (reload || forceReload) {
    //         console.log("Download");
    //         setVisibleDownload(true);
    //         await DownloadService.downloadFiles(data, storedID);
    //         setVisibleDownload(false);
    //     }

    //     console.log(data.principal_video);
    //     const storedVideos = await StorageService.getStoredData(STORAGE_VIDEOS);
    //     if (data.principal_video) setMainVideo(storedVideos, data.principal_video);
    //     setParent(storedVideos);
    //     setVideos(storedVideos[0].products);
    //     setAllRoutes(storedVideos);
    //     forceReload = false;
    //     setStopInitLoad(false);
    // }

    // useEffect(() => {
    //     if (!stopInitLoad) initLoad();
    // }, [])



    const selectVideo = async (video) => {
        console.log(video)
        setOpen({
            link: video.path,
            visible: true,
            repeat: false
        })
    }

    // const setAllRoutes = async (allroutes) => {
    //     const data = []; //parentCategory.name.replace(" ","-").toLowerCase(),
    //     if (allroutes.length) {
    //         allroutes.map(item => {
    //             console.log(item.name_caterogy);
    //             data.push({
    //                 key: item.name_caterogy, 
    //                 title: item.name_caterogy
    //             });
    //         });

    //         console.log(data);
    //         setRoutes(data);
    //     }
    // }

    // const setMainVideo = async (categories, mainUrl) => {
    //     console.log(mainUrl);
    //     for (const category of categories) {
    //         for (const product of category.products) {
    //             console.log(product.video.videoUrl);
    //             console.log(mainUrl)
    //             if (product.video.videoUrl === mainUrl) selectVideo(product, false);
    //         }
    //     }
    // }

    // _renderHeader = props => <TabBar {...props} style={styles.tabbar} indicatorStyle={styles.indicator} labelStyle={styles.label} />;

    // _renderScene = ({ route }) => {
    //     const empty = [];
    //     const filtered = parent.filter(item => item.name_caterogy === route.title);
    //     console.log(filtered);
    //     return (
    //         <TabViewWrapper
    //             videos={filtered[0].products}
    //             selectVideo={selectVideo}
    //             closeVideo={closeVideo}
    //             open={open} 
    //         />
    // 	);
    // };

    // const closeVideo = () => {
    //     setOpen({
    //         visible: false
    //     })
    // }

    // if (!parent) {
    //     return (
    //         <View style={[styles.contanier]}>
    //             <Modal
    //                 visible={visibleDownload}
    //                 animationType='fade'
    //             >
    //                 <HeaderModal noButton={true} close={() => {}} />
    //                 <View style={styles.downloadModalWrapper}>
    //                     <Text style={styles.textDownloadModal}>Espere un momento, el contenido está siendo descargado...</Text>
    //                 </View>
    //             </Modal>
    //         </View>
    //     )
    // }

    const openChat = () => {
        // ZendeskChat.startChat({
        //     name: 'sa',
        //     email: 'ss',
        //     phone: 'sa',
        //     tags: ["tag1", "tag2"],
        //     department: "Your department",
        //     // The behaviorFlags are optional, and each default to 'true' if omitted
        //     behaviorFlags: {
        //         showAgentAvailability: true,
        //         showChatTranscriptPrompt: true,
        //         showPreChatForm: false,
        //         showOfflineForm: true,
        //     },
        //     // The preChatFormOptions are optional & each defaults to "optional" if omitted
        //     preChatFormOptions: {
        //         name: "optional",
        //         email: "optional",
        //         phone: "optional",
        //         department: "optional",
        //     },
        //     localizedDismissButtonTitle: "Dismiss",
        // });
        setchat(!chat)
    }

    return (
        <View style={[styles.contanier, Flex.row]}>
            <View style={{ flex: 1 }}>
                <TabView
                    selectVideo={selectVideo}
                // navigationState={{ index, routes }}
                // renderTabBar={_renderHeader}
                // renderScene={_renderScene}
                // onIndexChange={setIndex}
                // initialLayout={initialLayout}
                />

                <ChatButton onPress={() => openChat()} chat={chat} />
                <MainVideo
                    visible={open.visible}
                    cover={''}
                    close={() => setOpen({ visible: false })}
                    link={open.link}
                    repeat={open.repeats}
                />
            </View>

            {
                chat && <Chat close={() => setchat(false)}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundVideo: {
        flex: 1
    },
    downloadModalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textDownloadModal: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    tabbar: {
        marginTop: 20,
        backgroundColor: 'white',
        width: '70%'
    },
    indicator: {
        backgroundColor: '#e85900',
        height: 2
    },
    label: {
        color: '#e85900',
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic'
    },
    btnAskMe: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e85900',
        width: 200,
        height: 50,
        padding: 12,
        position: 'absolute',
        borderRadius: 50,
        top: 20,
        right: 10,
        zIndex: 11,
        elevation: 3
    }
})
const mapStateToProps = (state) => ({
    videos: state.videosReducer.videos
})


export default connect(mapStateToProps)(HomeScreen) 
