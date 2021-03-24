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
    width: '50%',
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
});
export default styles;
