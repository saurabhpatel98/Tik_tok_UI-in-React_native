import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  header: {
    marginTop: 50,
    marginRight: 80,
    marginLeft: 80,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoDetails: {
   // backgroundColor: 'rgba(52, 52, 52, 0.3)',
    flexDirection: 'row',
    width:width,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  musicDetails: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
  musicCover: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: 'pink',
  },
  userPic: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: 'pink',
    borderColor:'white',
    borderWidth:2
  },
  sideBar: {
    backgroundColor: 'red',
    height: '50%',
    position: 'absolute',
    
  },
  sideBarText: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'white',
  },
});
