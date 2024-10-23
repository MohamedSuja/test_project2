import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorSheet.Background,
    marginHorizontal: responsiveScreenWidth(5),
    borderRadius: 5,
    marginVertical: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(3),
  },
});

export default styles;
