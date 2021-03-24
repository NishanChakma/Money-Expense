import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },

  selectBox: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
  selectBoxInside: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectBoxInsideSmall: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#6F5C84',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 10,
    color: '#fff',
  },
  noData: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    top: 150,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  reset: {
    backgroundColor: '#cc0202',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: '#fff',
  },
});
export default styles;
