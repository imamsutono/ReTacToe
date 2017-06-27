import React, { Component } from 'react';
import { 
  View,
  TouchableHighlight,
  Button,
  Text
} from 'react-native';
import styles from './Style';
// import Square from './Square';

let Square = (props) => {
  return (
    <TouchableHighlight 
      style={styles.square} 
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

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = 'Winner: '+ winner;
    } else {
      status = 'Next player : '+(this.state.xIsNext ? 'X': 'O');
    }

    return(
      <View style={{flex: 1}}>
        <Text style={{marginTop: 20, marginBottom: 8}}>{status}</Text>
        <View style={styles.board}>
          <View style={styles.squareRow}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </View>
          <View style={styles.squareRow}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </View>
          <View style={styles.squareRow}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
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