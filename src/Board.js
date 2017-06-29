import React, { Component } from 'react';
import { 
  View,
  TouchableHighlight,
  Button,
  Text,
  Animated,
  Alert
} from 'react-native';
import styles from './Style';

function checkAllSquare(element) {
  return element != null;
}

class Board extends Component {
  constructor() {
    super();

    this.state = {
      squares: Array(9).fill(null),
      squareIndex: null,
      xIsNext: true
    }

    this.springValue = new Animated.Value(0.3)
  }

  spring() {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 2
      }
    ).start()
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      squareIndex: i,
      xIsNext: !this.state.xIsNext
    });

    this.spring()
  }

  renderSquare(i, style) {
    return (
      <TouchableHighlight 
        style={style} 
        underlayColor="#1E88E5"
        onPress={() => this.handleClick(i)}>

        <Animated.Text
          style={{fontSize: 48, fontWeight: '100', color: '#e1f5fe', transform: [{scale: this.springValue}] }}>
          {this.state.squares[i]}
        </Animated.Text>
      </TouchableHighlight>
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
    } else if (!winner && this.state.squares.every(checkAllSquare)) {
      Alert.alert(
        'Permainan Selesai',
        'Hasil Seri',
        [
          { text: 'OK', onPress: () => this.setState({squares: Array(9).fill(null)}) }
        ]
      )

      status = 'hasil seri';
    } else {
      status = 'Next player : '+(this.state.xIsNext ? 'X': 'O');
    }

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
          <View style={{ alignItems: 'flex-end', flex: 2 }}>
            <Button 
              title="reset"
              onPress={() => this.setState({squares: Array(9).fill(null)} )} />
          </View>
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