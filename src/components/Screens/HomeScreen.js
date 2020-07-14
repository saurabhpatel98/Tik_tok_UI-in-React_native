import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions, Image, Animated, Easing} from 'react-native';
import {styles} from '../../style/style';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';
//import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextTicker from 'react-native-text-ticker';
import {data} from '../../utils/DummyData';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
console.log("width"+width+"height"+height);
const HomeScreen = () => {
  console.log('data', data);

  const TextRender = (props) => (
    <TextTicker
      style={styles.musicDetails}
      duration={10000}
      loop
      bounce
      repeatSpacer={50}
      marqueeDelay={1000}>
      {props.musicTrack}
    </TextTicker>
  );
  var videoPlayer;
  var rotationValue = new Animated.Value(0);
  const [isPaused, setPaused] = useState(false);
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 100,
        duration: 9000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const spin = rotationValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });
  // const [onBuffer, srtOnBuffer] = useState('Buffering.....');
  // const [videoError, setVideoError] = useState('Error');
  // const [currentTime, setCurrentTime] = useState(0);
  // const [isFullscreen, setIsFullscreen] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [paused, setPaused] = useState(false);
  // const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  // const [duration, setDuration] = useState(0);
  // const [screenType, setScreenType] = useState('strait');
  // const ref = useRef();
  // onSeek = (seek) => {
  //   videoPlayer.seek(seek);
  // };

  // onPaused = (playerState) => {
  //   setPaused(!paused);
  // };

  // onReplay = () => {
  //   setPlayerState(PLAYER_STATES.PLAYING);
  //   videoPlayer.seek(0);
  // };

  // onProgress = (data) => {
  //   if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
  //     setCurrentTime(data.currentTime);
  //   }
  // };

  // onLoad = (data) => {
  //   setDuration(data.duration);
  //   setIsLoading(false);
  // };

  // onLoadStart = (data) => {
  //   setIsLoading(true);
  // };

  // onEnd = () => {
  //   setPlayerState(PLAYER_STATES.ENDED);
  // };

  // onError = () => {
  //   alert(error);
  // };

  // exitFullscreen = () => {
  //   alert('exit full screen');
  // };

  // onFullscreen = () => {
  //   if (screenType == 'content') {
  //     setScreenType('cover');
  //   } else {
  //     setScreenType('content');
  //   }
  // };

  // renderToolbar = () => (
  //   <View>
  //     <Text>Toolbar</Text>
  //   </View>
  // );
  // onSeeking = (currentTime) => {};
  const handlePaused = (e) => {
    setPaused(!isPaused);
  };
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} horizontal={false} autoplay={false}>
        {data.map((element) => {
          return (
            <>
            <TouchableOpacity
                  onPress={() => {
                    handlePaused();
                  }}>
              <View style={styles.slide}>
              
                <Video
                  source={element.videoName}
                  ref={(ref) => {
                    videoPlayer = ref;
                  }}
                  style={styles.backgroundVideo}
                  resizeMode={'stretch'}
                  fullscreen={true}
                  paused={isPaused}
                />
              </View>
              
              <View
                style={{
                  position: 'absolute',
                  height:"100%",
                  width: width,
                  backgroundColor: 'rgba(52, 52, 52,0.3)',
                }}>
               
                <View style={{height:'30%'}}></View>
                  <View style={{height:height<700?"20%":"40%"}}>
                    <View style={{flexDirection: 'row-reverse'}}>
                      <View style={{width: 70}}>
                        <View>
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <View>
                              <Image
                                style={styles.userPic}
                                source={element.profilePic}
                              />
                            </View>
                            <View style={{position: 'absolute', top: '85%'}}>
                              <AntDesign
                                name={'pluscircle'}
                                size={15}
                                color={'red'}
                              />
                            </View>
                          </View>
                          <View
                            style={{
                              marginTop: 15,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Icon name={'heart'} size={45} color={'white'} />
                            <Text style={styles.sideBarText}>
                              {element.likes}
                            </Text>
                          </View>
                          <View
                            style={{
                              marginTop: 20,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <AntDesign
                              name={'message1'}
                              size={45}
                              color={'white'}
                            />
                            <Text style={styles.sideBarText}>
                              {element.comments}
                            </Text>
                          </View>
                          <View
                            style={{
                              marginTop: 20,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Icon name={'share'} size={45} color={'white'} />
                            <Text style={styles.sideBarText}>Share</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                
                <View>
                  <View style={styles.videoDetails}>
                    <View style={{width: '75%'}}>
                      <View>
                        <View>
                          <Text style={styles.username}>
                            {element.username}
                          </Text>
                        </View>
                        <View style={{marginTop: 30, flexDirection: 'row'}}>
                          <View>
                            <Icon name={'music'} size={25} color={'white'} />
                          </View>
                          <View style={{left: 20, width: '60%'}}>
                            <TextRender musicTrack={element.musicTrack} />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{margin: 10}}>
                      <View>
                        <Animated.Image
                          style={[
                            styles.musicCover,
                            {transform: [{rotate: spin}]},
                          ]}
                          source={element.musicTrackPic}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                
              </View>
              </TouchableOpacity>
            </>
          );
        })}
      </Swiper>
    </View>
    
  );
};

export default HomeScreen;
{
  /* <View style={styles.slide}>
          <Video
            // source={{
            //   uri:
            //     'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            // }}
            source={require('../../../video/VID-20200603-WA0004.mp4')}
            onEnd={onEnd}
            onLoad={onLoad}
            onLoadStart={onLoadStart}
            onProgress={onProgress}
            paused={paused}
            ref={(videoPlayer) => {
              videoPlayer = videoPlayer;
            }}
            style={styles.backgroundVideo}
            resizeMode={'stretch'}
            fullscreen={true}
          />
          <MediaControls
            duration={duration}
            isLoading={isLoading}
            mainColor="#332"
            onFullScreen={onFullscreen}
            onPaused={onPaused}
            onReplay={onReplay}
            onSeek={onSeek}
            onSeeking={onSeeking}
            playerState={playerState}
            progress={currentTime}
            toolbar={renderToolbar}
          />
        </View> */
}

{
  /* // <View style={styles.slide}>
        //   <Video
        //     source={require('../../../video/VID-20200704-WA0001.mp4')}
        //     ref={(ref) => {
        //       videoPlayer = ref;
        //     }}
        //     style={styles.backgroundVideo}
        //     resizeMode={'stretch'}
        //     fullscreen={true}
        //   />
        // </View> */
}
