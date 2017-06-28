import React, { Component } from 'react';
import { 
  View,
  TouchableHighlight,
  Button,
  Text,
  Alert
} from 'react-native';
import styles from './Style';

let Square = (props) => {
  return (
    <TouchableHighlight 
      style={props.styles} 
      underlayColor="#1E88E5"
      onPress={() => props.onClick()}>

      <Text style={styles.squareText}>{props.value}</Text>
    </TouchableHighlight>
  );
}

class Board extends Component {
  constructor() {
    super();

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i, style) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        styles={style} />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      Alert.alert(
        'Permainan Selesai',
        winner +' menang',
        [
          { text: 'OK', onPress: () => this.setState({squares: Array(9).fill(null)}) }
        ],
        { cancelable: false }
      )

      status = winner +' menang';
    } else {
      status = 'Next player : '+(this.state.xIsNext ? 'X': 'O');
    }
    /*else if (squares.every(!null)) {
      Alert.alert(
        'Permainan Selesai',
        'Hasil seri',
        [
          { text: 'OK', onPress: () => this.setState({squares: Array(9).fill(null)}) }
        ]
      )
    }*/

    return(
      <View style={{flex: 1}}>
        <View style={styles.board}>
          <View style={styles.squareRow}>
            {this.renderSquare(0, [styles.square, styles.rightBorder, styles.bottomBorder])}
            {this.renderSquare(1, [styles.square, styles.rightBorder])}
            {this.renderSquare(2, [styles.square, styles.rightBorder, styles.topBorder])}
          </View>
          <View style={styles.squareRow}>
            {this.renderSquare(3, [styles.square, styles.bottomBorder])}
            {this.renderSquare(4, [styles.square])}
            {this.renderSquare(5, [styles.square, styles.topBorder])}
          </View>
          <View style={styles.squareRow}>
            {this.renderSquare(6, [styles.square, styles.leftBorder, styles.bottomBorder])}
            {this.renderSquare(7, [styles.square, styles.leftBorder])}
            {this.renderSquare(8, [styles.square, styles.leftBorder, styles.topBorder])}
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Board;