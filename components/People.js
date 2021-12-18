import React, {useEffect} from 'react';
import {Text, View, Button, ScrollView, Image} from 'react-native';
//redux
import {connect} from 'react-redux';
//Action
import {Fetch_Ppl} from '../Redux/actions/PeopleActions';
const People = props => {
  useEffect(() => {
    props.api();
  }, []);
  if (props.loading === true) {
    return (
      <View>
        <Text>Loading.....</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{props.title}</Text>
      {props.data.length > 0 && (
        <ScrollView>
          {props.data.map((val, i) => (
            <View key={i}>
              <Image
                source={{uri: val.picture.thumbnail}}
                style={{width: 50, height: 50, borderRadius: 50 / 2}}
              />
              <Text>{val.email}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};
const mapStateToProps = state => {
  console.log(state.b.data);
  return {
    title: state.b.title,
    data: state.b.data,
    loading: state.b.loading,
    err: state.b.error_msg,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    api: () => dispatch(Fetch_Ppl()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(People);
