import React, {Component, useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
//import actions
import {
  Adding,
  Subtract,
  Reset,
  EditTitle,
} from '../Redux/actions/CounterAction';
//redux
import {connect} from 'react-redux';
const Counter = props => {
  const [data, setdata] = useState('');
  return (
    <View>
      <Text style={{fontSize: 40, alignSelf: 'center'}}>{props.title}</Text>
      <TextInput
        onChangeText={txt => setdata(txt)}
        style={{borderColor: 'black', borderWidth: 2, margin: 3}}
      />
      <Button onPress={() => props.e(data)} title="submit" />
      <Text style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>
        Num:{props.num}
      </Text>
      <Button onPress={() => props.a()} title="add" />
      <Button onPress={() => props.s()} title="sub" />
      <Button onPress={() => props.r()} title="reset" />
    </View>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    num: state.a.count,
    title: state.a.title,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    a: () => dispatch(Adding()),
    s: () => dispatch(Subtract()),
    r: () => dispatch(Reset()),
    e: newTitle => dispatch(EditTitle(newTitle)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
