import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },

  selectBox: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  selectBox2: {
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    width: '60%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  selectBoxInside: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectBoxInsideSmall: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filter: {
    paddingHorizontal: 30,
    backgroundColor: '#CC0000',
    alignSelf: 'flex-end',
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
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: '#fff',
  },
  or: {
    textAlign: 'center',
  },
});
export default styles;
