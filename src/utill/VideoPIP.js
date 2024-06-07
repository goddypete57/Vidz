import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Animated, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Video from 'react-native-video';
import PlayIcon from '../../assets/icons/Play.svg';
import PauseIcon from '../../assets/icons/Pause.svg';
import { AuthContext } from "../../context/AuthContext";
import { VideoContext } from "../../context/VideoContext";
import ExpandIcon from '../../assets/icons/expand.svg';
import mainRouts from "../navigations/routs/mainRouts";
import { useNavigation } from "@react-navigation/native";
import { DragableView } from "../components/DragableView";


export default function VideoPIP() {
    const navigation = useNavigation();
    const { videoUri, duration, setDuration, videoId, isPIP, setIsPIP, dismiss } = React.useContext(VideoContext);
    const { token } = React.useContext(AuthContext);
    const ref = useRef();
    const [mute, setMute] = useState(false);
    const [progress, setProgress] = useState(null);
    const [sliderValue, setSliderValue] = useState(0);
    const [sliderDragged, setSliderDragged] = useState(false);
    const [isBuffering, setIsBuffering] = useState(true);
    const [play, setPlay] = useState(true);
    const [clicked, setClicked] = useState(false);


    const handleClick = () => {
        if (clicked) {
            setClicked(false)

        } else {

            setClicked(true)
        }
    }

    const handleplay = () => {
        if (ref.current) {

        }
        setPlay(true)
    }

    const handlePause = () => {
        if (play) {
            setPlay(false)
            return
        }

        setPlay(true)
    }

    useEffect(() => {
        if (!play) {
            setDuration(progress)
            setPlay(true)
            setIsPIP(false)
            navigation.navigate(mainRouts.VideoDetailsScreen, { id: videoId })
        }
    }, [dismiss])


    useEffect(() => {
        if (isPIP) {
            ref?.current?.seek(duration?.currentTime ?? 0, 50);
            setPlay(!isPIP)
        }
    }, [isPIP])
    return (
        <DragableView>
            {token && videoUri && <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    handleClick()
                }} style={{
                    position: 'absolute',
                    bottom: 60,
                    right: 10,
                    backgroundColor: 'black',
                    height: 300,
                    width: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    display: isPIP ? 'flex' : 'none',
                }}>

                <View>
                    {/* Your other components */}
                    <Video
                        ref={ref}
                        source={{ uri: videoUri }}
                        muted={mute}
                        paused={play}
                        onBuffer={({ isBuffering }) => setIsBuffering(isBuffering)}
                        onLoad={(meta) => {
                            ref.current.seek(0, 50);
                            setIsBuffering(false);
                            // Determine if the video is landscape or portrai
                        }}
                        onProgress={(x) => {
                            setProgress(x);
                            if (!sliderDragged) {
                                setSliderValue(x.currentTime);
                            }
                        }}
                        onEnd={() => {
                            ref.current.seek(0, 50);
                            setPlay(true);
                            setSliderValue(0);
                        }}
                        style={{
                            width: 200,
                            height: 300,
                            backgroundColor: 'black',
                        }}
                        resizeMode={'contain'} // Use state variable to set resizeMode
                    />

                    {isBuffering && (
                        <View style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                    )}
                </View>
                {
                    clicked &&
                    <View
                        style={{
                            width: 180,
                            height: 100,
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 6,
                            // bottom:10
                        }}>
                        {/* <TouchableOpacity style={{
                            position: 'absolute',
                            top: 3,
                            right: -10,
                            padding: 5,
                            zIndex: 1,
                        }}>
                            <CancelIcon color={colors.white} />
                        </TouchableOpacity> */}
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{
                                    padding: 5,
                                    backgroundColor: 'rgba(5, 15, 33, 0.4)',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    setDuration(progress)
                                    setPlay(true)
                                    setIsPIP(false)
                                    navigation.navigate(mainRouts.VideoDetailsScreen, { id: videoId })
                                }}>
                                <ExpandIcon />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                justifyContent: 'space-evenly',
                                flexDirection: 'row',
                                position: 'absolute',
                                bottom: 0,
                                paddingLeft: 10,
                                paddingEnd: 10,
                                borderRadius: 10,
                                alignItems: 'center',
                                paddingVertical: 4,
                                // marginVertical: fullScreen ? 7 : 0,
                                backgroundColor: 'rgba(5, 15, 33, 0.4)',
                            }}>

                            <TouchableOpacity
                                onPress={() => {
                                    play ? handlePause() : handleplay()
                                }}>
                                {play ? <PlayIcon /> : <PauseIcon />}
                            </TouchableOpacity>

                            {/* <Slider
                                style={{ width: '50%', height: 10, }} // Adjusted for centering
                                minimumValue={0}
                                maximumValue={progress?.seekableDuration}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#fff"
                                thumbTintColor='#fff'
                                // Changed for contrast, adjust as needed
                                onValueChange={x => {
                                    setSliderValue(x);
                                    ref.current.seek(x);
                                }}
                                onSlidingStart={() => setSliderDragged(true)}
                                onSlidingComplete={() => setSliderDragged(false)}
                                value={sliderValue}
                            /> */}

                            {/* <View style={{width:200,height:2,backgroundColor:colors.white}}/> */}

                            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white' }}>
                                    {progress?.currentTime ? format(progress?.currentTime) : '00'}/
                                </Text>
                                <Text style={{ color: 'white' }}>
                                    {progress?.seekableDuration ? format(progress?.seekableDuration) : '00'}
                                </Text>
                                <TouchableOpacity
                                    style={{ marginStart: 8, marginEnd: 8 }}
                                    onPress={() => {
                                        setMute(!mute);
                                    }}>
                                    {mute ? <Unmute /> : <MuteIcon />}
                                </TouchableOpacity>

                            </View> */}

                        </View>

                    </View>
                }
            </TouchableOpacity>
            }
        </DragableView>
    );
}