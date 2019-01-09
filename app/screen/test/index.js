import React, { Component } from 'react';
import RecentCard from '../../components/recent_card'
import List from '../../components/list'
import Header from '../../components/header'
import style from '../../style'
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';


const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class TestScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
        <View style={[style.main, 
              ]}>



<View style={{ marginBottom: 15, } }>
    <Text style={{
        color: '#2b2b2b',
        fontSize: 18,
        fontWeight: '800',
        fontFamily: 'Helvetica Neue'
    }}>Recent Building</Text>
</View>
<View style={{ flexDirection: 'row', marginBottom: 6 }}>
    <View style={{ flex: 1 }} >
        <RecentCard campus="M" building="Main Building" floor="7" />
    </View>
    <RecentCard campus="S" building="Steel Building" floor="12" />

</View>
<View style={{ flexDirection: 'row', marginBottom: 15 }}>
    <View style={{ flex: 1, marginBottom: 10 }} >
        <RecentCard campus="V" building="Van Building" floor="7" />
    </View>
    <RecentCard campus="M" building="Main Building" floor="7" />

</View>
<List icons="bookmark" text="Last Building"/>
<List icons="bookmark" text="Conner Building"/>
<List icons="bookmark" text="Store Building"/>
<List icons="bookmark" text="Last Building"/>
<List icons="bookmark" text="Conner Building"/>
<List icons="bookmark" text="Store Building"/>

</View>
      </View>
    );
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
           showsVerticalScrollIndicator={false} 
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>
        
        <Text style={styles.title}>Title</Text>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          {/* <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={require('../../img/bg.jpg')}
          /> */}
          <Header name="Steve.Job" campus="South Campus" />
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <Text style={styles.title}>Title</Text>
        </Animated.View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },

  header: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },

  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
      
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
 
});