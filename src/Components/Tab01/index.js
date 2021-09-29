import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import {TAB_TITLE} from '../../constans';
import TabContent01 from '../Tab01/TabContent01';
import TabContent02 from '../Tab01/TabContent02';

const Tab01 = () => {
  const [type, setType] = useState(0);
  return (
    <>
      <View
        style={{
          width: Dimensions.get('window').width,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
        }}>
        <View>
          <TouchableWithoutFeedback onPress={() => setType(0)}>
            <Text
              style={{
                fontSize: TAB_TITLE,
                fontWeight: type === 0 ? 'bold' : 'normal',
                color: type === 0 ? '#222' : '#666',
                marginBottom: type === 0 ? 7 : 11,
              }}>
              배달주문
            </Text>
          </TouchableWithoutFeedback>
          {type === 0 && (
            <View
              style={{
                height: 4,
                backgroundColor: '#222',
              }}
            />
          )}
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => setType(1)}>
            <Text
              style={{
                fontSize: TAB_TITLE,
                fontWeight: type === 1 ? 'bold' : 'normal',
                color: type === 1 ? '#222' : '#666',
                marginBottom: type === 1 ? 7 : 11,
              }}>
              포장/방문주문
            </Text>
          </TouchableWithoutFeedback>
          {type === 1 && (
            <View
              style={{
                height: 4,
                backgroundColor: '#222',
              }}
            />
          )}
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: Dimensions.get('window').width,
          backgroundColor: '#e6e6e6',
          marginBottom: 20,
        }}
      />
      <View style={{marginBottom: 10}}>
        {type === 0 ? <TabContent01 /> : <TabContent02 />}
      </View>
    </>
  );
};

export default Tab01;
