// Place fonts/icomoon.ttf in your fonts/ directory and
// add the following to your pubspec.yaml
// flutter:
//   fonts:
//    - family: icomoon
//      fonts:
//       - asset: fonts/icomoon.ttf
import 'package:flutter/widgets.dart';

class Icomoon {
  Icomoon._();

  static const String _fontFamily = 'icomoon';

  static const IconData home = IconData(0xe900, fontFamily: _fontFamily);
  static const IconData star_empty = IconData(0xe9d7, fontFamily: _fontFamily);
  static const IconData play2 = IconData(0xea15, fontFamily: _fontFamily);
  static const IconData arrow_right2 = IconData(0xea3c, fontFamily: _fontFamily);
  static const IconData ctrl1 = IconData(0xea51, fontFamily: _fontFamily);
  static const IconData ctrl = IconData(0xea50, fontFamily: _fontFamily);
  static const IconData facebook = IconData(0xea90, fontFamily: _fontFamily);
  static const IconData instagram = IconData(0x1f326, fontFamily: _fontFamily);
  static const IconData twitter = IconData(0xea96, fontFamily: _fontFamily);
  static const IconData dribbble = IconData(0xeaa7, fontFamily: _fontFamily);
}
