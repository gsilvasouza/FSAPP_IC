import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Tabela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead1: ['Materia'],
      tableData1: [
        ['Nota1', 'Nota2', 'Nota3', 'Nota4', 'Media', 'Faltas'],
        ['10', '9', '9', '9', '9', '0'],
      ],

    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead1} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData1} textStyle={styles.text} style={styles.head}/>
        </Table>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginTop:10}}>
          <Row data={state.tableHead1} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData1} textStyle={styles.text} style={styles.head}/>
        </Table>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginTop:10}}>
          <Row data={state.tableHead1} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData1} textStyle={styles.text} style={styles.head}/>
        </Table>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginTop:10}}>
          <Row data={state.tableHead1} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData1} textStyle={styles.text} style={styles.head}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#09519B' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, backgroundColor:'red' }
});