import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Video from 'react-native-video';
import { Flex } from '../../infraestructure/Theme';

const HVideo = ({ source, cover, close }) => {
    const [isBuffer, setisBuffer] = useState(false)

    const refvideo = useRef(null);

    const load = async()=> {
        setisBuffer(false)
        await refvideo.current._onBuffer((e) => console.log())
    }

    const buffering = ( )=> {

    }

    console.log(cover);
    return (
        <View style={[styles.container, Flex.alignItemsCenter, Flex.justifyCenter]}>
            <Video source={{ uri: source }}
                fullscreen={true}
                ref={refvideo}
                style={styles.video}
                poster={cover}
                resizeMode={'contain'}
                onError={close}
                onEnd={() => close()}
                onReadyForDisplay={(e) => console.log(e)}
            />

            {
                isBuffer && <ActivityIndicator />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    video: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'black',
    },
})

export default HVideo
