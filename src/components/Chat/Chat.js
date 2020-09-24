import React, { useRef, useState, useEffect } from 'react'
import { View, TextInput, Text } from 'react-native'
import { WebView } from 'react-native-webview';
import { Flex, Fonts, Margins, Paddings } from '../../infraestructure/Theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ears from 'react-native-vector-icons/dist/SimpleLineIcons';

const html = () => `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Start of labelgruphelp Zendesk Widget script -->
    <script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=36ead481-7d6e-4f41-a70a-16e302850937"
    ></script>
    <!-- End of labelgruphelp Zendesk Widget script -->
  </body>
</html>

`

export default function Chat({
    close
}) {

    let time = null

    const [text, settext] = useState('')
    const web = useRef(null)
    const [showBar, setshowBar] = useState(true)


    useEffect(() => {
        if (text === '')
            time = setTimeout(() => {
                if (text === '') {
                    close()
                }
            }, 10000);
        else
            clearTimeout(time)
    }, [text])

    const sendMessageToWebView2 = () => {
        web.current.injectJavaScript(`
                (function () {
                 		  zE('webWidget', 'chat:send', '${text}');
                })();
            `);
        settext('')
        setshowBar(false)
    };




    return (
        <View style={[{ width: '100%', height: '100%', top: 0, left: 0, flex: 1, position: 'absolute' }]}>
            {
                showBar && <View style={[{ elevation: 3, backgroundColor: 'white', height: 70 }, Paddings.h30, Flex.row, Flex.alignItemsCenter]}>
                    <Text style={[Fonts.univers]}>ESCRIBE PARA COMENZAR</Text>
                </View>
            }

            <WebView
                useWebKit
                ref={web}
                source={{ uri: 'https://bitec.okoiagency.com/webchat/' }}
                showsVerticalScrollIndicator={true}
                applicationNameForUserAgent={'Bitec'}
                keyboardDisplayRequiresUserAction={false} //ios
                autoFocus={true} //android
                // injectedJavaScript={Script1}
                automaticallyAdjustContentInsets={false}
                allowFileAccessFromFileURLs={true}
                scalesPageToFit={true}
                mixedContentMode={"always"}
                javaScriptEnabled={true}
                javaScriptEnabledAndroid={true}
                startInLoadingState={true}
                automaticallyAdjustContentInsets={true}
                javaScriptCanOpenWindowsAutomatically={false}
                originWhitelist={["about:blank"]}
            // shouldStartLoadWithRequestHandler={({ url }) => url.startsWith("about:blank")}

            />
            <View style={[Paddings.h30, Margins.b30]}>
                <View style={[{ backgroundColor: '#eee', height: 60, borderRadius: 100, width: '80%', elevation: 3 }, Flex.row, Flex.alignItemsCenter, Paddings.h20,]}>
                    <Icon name='comments-o' color={'#ccc'} size={40} style={{ marginRight: 5 }} />
                    <TextInput
                        style={[{ height: 60, flex: 1 }, Paddings.h20,]}
                        placeholder='Escribe un mensaje'
                        value={text}
                        onChangeText={e => settext(e)}
                        onSubmitEditing={sendMessageToWebView2}
                    />
                </View>

            </View>

        </View>
    )
}
