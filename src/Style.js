import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center'
  },
  container: {
    marginTop: 16
  },
  board: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    borderColor: '#BDBDBD'
  },
  squareRow: {
    flex: 1,
    flexDirection: 'column'
  },
  square: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#1976D2'
  },
  squareText: {
    fontSize: 32,
    fontWeight: '200',
    color: '#fff'
  },
  appsTitle: {
    marginTop: 32,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1976D2'
  }
});

export default styles;
