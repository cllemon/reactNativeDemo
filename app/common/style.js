import { StyleSheet, Platform } from 'react-native';
import { VALUE } from '../common/constance';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },
  container_doc: {
    color: '#409EFF',
    fontSize: 14,
    textAlign: 'center',
    borderBottomColor: '#409EFF',
    marginBottom: 12,
    marginTop: 6
  },
  package_show: {
    width: VALUE.width * 0.96,
    margin: 8,
    marginRight: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
    flexDirection: 'column',
    ...Platform.select({
      ios: {
        shadowColor: '#999',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5
      },
      android: {
        elevation: 4
      }
    })
  },
  package_show_component: {
    minHeight: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  }
});
