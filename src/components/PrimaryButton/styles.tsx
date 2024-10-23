import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorSheet.Blue,
    marginHorizontal: responsiveScreenWidth(5),
    borderRadius: 5,
    marginVertical: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(3),
    height: responsiveScreenHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: ColorSheet.Primary,
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '500',
  },
});

export default styles;
