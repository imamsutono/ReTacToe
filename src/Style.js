import { StyleSheet } from 'react-native';

const brdColor = '#E1E2E1';
const brdWidth = 2;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#42a5f5',
    justifyContent: 'center'
  },
  container: {
    marginTop: 16
  },
  appsTitle: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e1f5fe'
  },
  board: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#42a5f5',
    padding: 16
  },
  squareRow: {
    flex: 1,
    flexDirection: 'column'
  },
  square: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightBorder: {
    borderRightColor: brdColor,
    borderRightWidth: brdWidth
  },
  leftBorder: {
    borderLeftColor: brdColor,
    borderLeftWidth: brdWidth
  },
  bottomBorder: {
    borderBottomColor: brdColor,
    borderBottomWidth: brdWidth
  },
  topBorder: {
    borderTopColor: brdColor,
    borderTopWidth: brdWidth
  },
  squareText: {
    fontSize: 48,
    fontWeight: '100',
    color: '#e1f5fe'
  },
  footer: {
    backgroundColor: '#E1E2E1',
    padding: 16
  },
  status: {
    textAlign: 'center',
    color: '#212121',
    fontSize: 20
  }
});

export default styles;
