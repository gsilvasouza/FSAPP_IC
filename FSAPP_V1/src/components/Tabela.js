import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Tabela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead1: ['Java'],
      tableData1: [
        ['Nota1', 'Nota2', 'Nota3', 'Nota4', 'Media', 'Faltas'],
        ['10', '9', '9', '9', '9', '0'],
      ],
      tableHead2: ['ChatBot'],
      tableData2: [
        ['Nota1', 'Nota2', 'Nota3', 'Nota4', 'Media', 'Faltas'],
        ['10', '9', '9', '9', '9', '0'],
      ],
      tableHead3: ['Python'],
      tableData3: [
        ['Nota1', 'Nota2', 'Nota3', 'Nota4', 'Media', 'Faltas'],
        ['10', '9', '9', '9', '9', '0'],
      ],
      tableHead4: ['Banco De Dados'],
      tableData4: [
        ['Nota1', 'Nota2', 'Nota3', 'Nota4', 'Media', 'Faltas'],
        ['10', '9', '9', '9', '9', '0'],
      ],
      tableHead5: ['Java'],
      tableData5: [
        ['Media Final', 'Exame', 'Faltas'],
        ['10', '0', '0'],
      ],
      tableDataFooter: ['Status: Aprovado'],
      tableHead6: ['ChatBot'],
      tableData6: [
        ['Media Final', 'Exame', 'Faltas'],
        ['10', '0', '0'],
      ],
      tableHead7: ['Python'],
      tableData7: [
        ['Media Final', 'Exame', 'Faltas'],
        ['10', '0', '0'],
      ],
      tableHead8: ['Banco de Dados'],
      tableData8: [
        ['Media Final', 'Exame', 'Faltas'],
        ['10', '0', '0'],
      ],
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        {
          this.props.exibirTabela == 1
          ? 
          <View>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead1} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData1} textStyle={styles.text} style={styles.head}/>
            </Table>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginTop:10}}>
              <Row data={state.tableHead2} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData2} textStyle={styles.text} style={styles.head}/>
            </Table>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginTop:10}}>
              <Row data={state.tableHead3} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData3} textStyle={styles.text} style={styles.head}/>
            </Table>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginTop:10}}>
              <Row data={state.tableHead4} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData4} textStyle={styles.text} style={styles.head}/>
            </Table>
          </View>
          : this.props.exibirTabela == 2
          ? 
          <View>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead1} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData1} textStyle={styles.text} style={styles.head}/>
            </Table>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginTop:10}}>
              <Row data={state.tableHead2} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData2} textStyle={styles.text} style={styles.head}/>
            </Table>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginTop:10}}>
              <Row data={state.tableHead3} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData3} textStyle={styles.text} style={styles.head}/>
            </Table>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginTop:10}}>
              <Row data={state.tableHead4} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData4} textStyle={styles.text} style={styles.head}/>
            </Table>
          </View>
          : 
          <View>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginBottom: 10}}>
            <Row data={state.tableHead5} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData5} textStyle={styles.text} style={styles.head}/>
            <Row data={state.tableDataFooter} style={styles.head} textStyle={styles.text}/>
          </Table>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginBottom: 10}}>
            <Row data={state.tableHead6} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData6} textStyle={styles.text} style={styles.head}/>
            <Row data={state.tableDataFooter} style={styles.head} textStyle={styles.text}/>
          </Table>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{marginBottom: 10}}>
            <Row data={state.tableHead7} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData7} textStyle={styles.text} style={styles.head}/>
            <Row data={state.tableDataFooter} style={styles.head} textStyle={styles.text}/>
          </Table>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead8} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData8} textStyle={styles.text} style={styles.head}/>
            <Row data={state.tableDataFooter} style={styles.head} textStyle={styles.text}/>
          </Table>
        </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#09519B' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, backgroundColor:'red' }
});