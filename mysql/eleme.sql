/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : eleme

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2019-08-16 14:14:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart_table
-- ----------------------------
DROP TABLE IF EXISTS `cart_table`;
CREATE TABLE `cart_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(32) DEFAULT NULL,
  `item_id` varchar(24) DEFAULT NULL COMMENT 'utf8',
  `count` tinyint(3) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `user_id` (`user_id`,`item_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart_table
-- ----------------------------
INSERT INTO `cart_table` VALUES ('1', '用户0001', '2019', '8');

-- ----------------------------
-- Table structure for collect_table
-- ----------------------------
DROP TABLE IF EXISTS `collect_table`;
CREATE TABLE `collect_table` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `type` varchar(8) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect_table
-- ----------------------------
INSERT INTO `collect_table` VALUES ('1', 'click', '666');
INSERT INTO `collect_table` VALUES ('2', 'jiesuan', '666');

-- ----------------------------
-- Table structure for menu_table
-- ----------------------------
DROP TABLE IF EXISTS `menu_table`;
CREATE TABLE `menu_table` (
  `ID` varchar(32) DEFAULT NULL,
  `name` varchar(16) DEFAULT NULL,
  `item_id` varchar(32) DEFAULT NULL,
  `image_path` varchar(64) DEFAULT NULL,
  `description` varchar(64) DEFAULT NULL,
  `lowest_price` int(32) DEFAULT NULL,
  `foods_name` varchar(64) DEFAULT NULL,
  `month_sales` int(10) DEFAULT NULL,
  `satisfy_rate` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu_table
-- ----------------------------
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '黄李记套餐', '200000363253531564', 'f02c214d3e08d2bb47ccaa95cdaa7b44jpeg', '套餐默认是二两粉，九阳豆浆山楂乌梅煎有冷和热的，麻烦亲爱的顾客下单的时候备注一下哦！（默认是冷的豆浆）\n主要原料：米粉,豆浆粉', '16', ' 螺蛳粉+炸鸭脚+卤蛋+饮料', '6', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '新品糖水', '200000363253531512', '3fa2980d72c2f3594e6387fb13cd8b08jpeg', '\n主要原料：木薯', '6', '木薯糖水', '15', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531513', 'cbd387500be390470f7e781e9ef550aejpeg', '\n主要原料：米粉', '11', '二两凉拌粉', '3', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '黄李记螺蛳粉', '200000363253531564', 'f349a006f7acc3536de6a4849e2c234cjpeg', '\n主要原料：大米', '9', '招牌二两螺蛳粉{无肉}', '48', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '黄李记套餐', '200000363253531564', 'a0ee7dd0e8b45d139606599b15bae505jpeg', '套餐默认是二两粉，九阳豆浆和山渣乌梅煎有冷和热的，麻烦亲爱的顾客下单的时候备注一下哦！（默认是冷的豆浆）\n主要原料：米粉,豆浆粉', '16', ' 螺蛳粉+腊肠+鸡蛋+饮料', '3', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '黄李记套餐', '200000363253531564', '54503af68e6dd0df3acd39c218de457bjpeg', '套餐默认是二两粉，九阳豆浆山渣乌梅煎有冷和热的，麻烦亲爱的顾客下单的时候备注一下哦！（默认是冷的豆浆）\n主要原料：米粉,豆浆粉', '15', '螺蛳粉+卤鸭脚+卤蛋+饮料', '8', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '黄李记套餐', '200000363253531564', '41568b090dfa2cf898eb115df054b30cjpeg', '套餐默认是二两粉，九阳豆浆山楂乌梅煎有冷和热的，麻烦亲爱的顾客下单的时候备注一下哦！（默认是冷的豆浆）\n主要原料：米粉,豆浆粉', '19', '螺蛳粉+鸡翅+卤蛋+饮料', '6', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '热销', '200000363253531564', '435d9db7a77197ec8504f5d7de2ea7b1jpeg', '', '1', '豆腐果一份', '95', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '热销', '200000363253531564', '54e033d29489344c67559c7a1e5dfbd5jpeg', '选用鹌鹑蛋。煮熟去皮，用螺丝汤熬制，吸取螺丝汤之精华，味道独特，一份三个。\n主要原料：鹌鹑蛋', '1', '鹌鹑蛋', '73', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '热销', '200000363253531564', 'f349a006f7acc3536de6a4849e2c234cjpeg', '\n主要原料：大米', '9', '招牌二两螺蛳粉{无肉}', '48', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '黄李记螺蛳粉', '200000363253531564', 'a863b9c1773f8f87addcb2eb72a750ddjpeg', '\n主要原料：米粉', '10', '招牌三两螺蛳粉{无肉}', '9', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '黄李记螺蛳粉', '200000363253531564', '1af5ffa1fa9c198d9caa702d8bd616d0jpeg', '\n主要原料：米粉', '12', '三两加料螺蛳粉{无肉}', '11', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '热销', '200000363253531564', 'b27f361153fbbecf6777cb00499dc7abjpeg', '', '2', '卤鸡蛋', '100', '86');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '黄李记螺蛳粉', '200000363253531564', '1af5ffa1fa9c198d9caa702d8bd616d0jpeg', '\n主要原料：米粉', '11', '二两加料螺蛳粉{无肉}', '12', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '黄李记套餐', '200000363253531564', '13f691e2b46413f11d0e157e003cf1e8jpeg', '套餐默认是二两粉，九阳豆浆和山渣乌梅煎有冷和热的，麻烦亲爱的顾客下单的时候备注一下哦！（默认是冷的豆浆）\n主要原料：米粉,豆浆粉', '14', ' 螺蛳粉+卤蛋+油果+饮料', '14', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531564', 'f773f41cbf7d6466e579f1d118e67bb2jpeg', '\n主要原料：猪肉', '11', '云吞中份', '4', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '2000003632535315378', '3b6af2f55cbc79199389144239f9bed3jpeg', '可在配菜里选择加粉，备注一下加在哪一碗粉里哦~\n主要原料：米粉', '15', '三两大肠粉', '1', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531522', 'cbd387500be390470f7e781e9ef550aejpeg', '可在配菜里选择加粉，备注一下加在哪一碗粉里哦~\n主要原料：米粉', '11', '二两干捞粉', '2', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531534', '0b6ab3db3177bdbe286b2605e3fa36b7jpeg', '可在配菜里选择加粉，备注一下加在哪一碗粉里哦~\n主要原料：米粉', '11', '二两牛腩粉', '2', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531562', '3b6af2f55cbc79199389144239f9bed3jpeg', '可在配菜里选择加粉，备注一下加在哪一碗粉里哦~\n主要原料：米粉', '14', '二两大肠粉', '0', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531533', 'f773f41cbf7d6466e579f1d118e67bb2jpeg', '\n主要原料：猪瘦肉', '12', '云吞大份', '7', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531568', '0b6ab3db3177bdbe286b2605e3fa36b7jpeg', '可在配菜里选择加粉，备注一下加在哪一碗粉里哦~\n主要原料：米粉', '12', '三两牛腩粉', '1', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531567', 'cbd387500be390470f7e781e9ef550aejpeg', '可在配菜里选择加粉，备注一下加在哪一碗粉里哦~\n主要原料：粉米', '12', '三两干捞粉', '3', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531566', 'cbd387500be390470f7e781e9ef550aejpeg', '可在配菜里选择加粉，备注一下加在哪一碗粉里哦~\n主要原料：粉米', '12', '三两凉拌粉', '0', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '美味靓粉', '200000363253531562', 'f773f41cbf7d6466e579f1d118e67bb2jpeg', '\n主要原料：猪瘦肉', '10', '云吞小份', '2', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '田螺鸭脚煲', '200000363253531533', 'aade06089e790302878e244abf99f058jpeg', '\n主要原料：鸭肉,田螺', '38', '招牌田螺煲（大）', '1', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531236', 'ef2f8a824eb6efdb5f92c6c053ea2433jpeg', '', '6', '凉拌海带', '1', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '田螺鸭脚煲', '200000363253531456', 'e3c8138f321ed1cdbf9520f559c8d913jpeg', '\n主要原料：鸭肉,田螺', '25', '招牌田螺煲（小）', '11', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531442', '1a159cc563572353c9ce91ee1b030f2ajpeg', '', '25', '炸大肠', '0', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531341', 'fe4c6f9ce730368de9cd23e4ac93811fjpeg', '\n主要原料：鸡翅,零度可口', '6', '鸡翅一个', '12', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531333', '5aa6ceb99e5bf7f14af3def90768fd11jpeg', '', '2', '鸭脚', '34', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531321', '1cfc1bd1295e96ed881f607fb4701637jpeg', '\n主要原料：酸菜', '2', '酸菜', '18', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531235', '6d447d7075a49a4d2899e6b3a36c1d5fjpeg', '猪肉紧缺，肉价上涨，敬请原谅\n主要原料：猪肉', '8', '爽口肉一份', '28', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531231', 'b27f361153fbbecf6777cb00499dc7abjpeg', '', '2', '卤鸡蛋', '100', '86');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531127', '46f6c5ffd8bdef997fbb120c92f5dfefjpeg', '', '3', '炸鸭脚', '62', '67');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531555', '5ab758788f4ca63fe0052af47dec4fffjpeg', '猪肉紧缺，肉价上涨，敬请原谅\n主要原料：猪肉', '8', '叉烧一份', '8', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531126', '435d9db7a77197ec8504f5d7de2ea7b1jpeg', '', '1', '豆腐果一份', '95', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531441', '6f0858ce521ea84c0522669b72b2f00ajpeg', '精选柳州地道酸笋。味道极正。\n主要原料：笋丝', '2', '酸笋', '23', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531333', 'f58d5de09d305bc7653ac0d5aa51051fjpeg', '请备注一下加在哪一碗粉里哦~谢谢！\n主要原料：米粉', '1', '加一元粉', '36', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531222', '1b1647d46b3bcb8ed948358daf44844bjpeg', '\n主要原料：鸡腿', '6', '鸡腿一个', '20', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531111', 'd4488e2acb069634391e6ad06113f09ajpeg', '', '6', '凉拌黄瓜', '4', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531134', '38f5518fd2dc13de70ba9ae6d7c37de1jpeg', '', '3', '腐竹一份', '33', '83');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531125', '1a159cc563572353c9ce91ee1b030f2ajpeg', '', '15', '一碟大肠', '0', '0');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531124', 'ff07629639d379c3f5bfedfa24a22b48jpeg', '', '3', '青菜一份', '35', '100');
INSERT INTO `menu_table` VALUES ('E1760582611490519654', '经典配菜', '200000363253531123', '54e033d29489344c67559c7a1e5dfbd5jpeg', '选用鹌鹑蛋。煮熟去皮，用螺丝汤熬制，吸取螺丝汤之精华，味道独特，一份三个。\n主要原料：鹌鹑蛋', '1', '鹌鹑蛋', '73', '100');

-- ----------------------------
-- Table structure for restaurants_table
-- ----------------------------
DROP TABLE IF EXISTS `restaurants_table`;
CREATE TABLE `restaurants_table` (
  `ID` int(64) NOT NULL,
  `restaurant_id` varchar(64) CHARACTER SET latin1 DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `distance` mediumint(9) DEFAULT NULL,
  `tips` varchar(32) DEFAULT NULL,
  `recent_order_num` mediumint(9) DEFAULT NULL,
  `rating_count` int(10) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `float_delivery_fee` tinyint(4) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `order_lead_time` varchar(16) DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `image_path` varchar(255) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of restaurants_table
-- ----------------------------
INSERT INTO `restaurants_table` VALUES ('0', 'E1760582611490519654', '黄李记三中路店', '2354', '免配送费', '3711', '987', '4.6', '15', '21.4728', '24', '109.107', '0352d24b063562f1cd9623ce26d02e2fjpeg');
INSERT INTO `restaurants_table` VALUES ('1', 'E12148387977432232564', '必胜客宅急送(北海财富广场店)', '1624', '配送费¥5', '248', '60', '4.6', '0', '21.4752', '40', '109.115', '1723c54d8b5a9b582555bc9e97430acfpng');
INSERT INTO `restaurants_table` VALUES ('5', 'E9926221537013946719', '山口肥叔鸭饭', '1500', '免配送费', '1283', '325', '4.2', '15', '21.4749', '22', '109.116', 'd240cb1d009893d1d5aaaac6434cbf94png');
INSERT INTO `restaurants_table` VALUES ('6', 'E7112454686423817270', '品匠小煲煲', '245', '配送费¥1', '1942', '343', '4.4', '15', '21.4691', '20', '109.123', 'ef5b3c18bd1552702ac2549c14a9002apng');
INSERT INTO `restaurants_table` VALUES ('7', 'E3104215945845962846', '沙虫皇粥粉', '746', '免配送费', '436', '108', '4.4', '15', '21.47', '20', '109.118', '0015b8b9ec9a9e3e2e4ccc08c088a27epng');
INSERT INTO `restaurants_table` VALUES ('2', 'E11766241421194778987', '北方滋味', '548', '免配送费', '1193', '370', '4.7', '15', '21.4674', '21', '109.119', '81b62c8ac7a0af0df080764a0181cd47jpeg');
INSERT INTO `restaurants_table` VALUES ('3', 'E8823814591035289285', '鼎尚七好(便当品质店)', '713', '免配送费', '10129', '2072', '4.6', '15', '21.4719', '20', '109.121', '974919522cfc2ea3bd07eaca9fbff996jpeg');
INSERT INTO `restaurants_table` VALUES ('4', 'E5318948603853693107', '马来一号·海南鸡饭(鑫丰丽景店)', '3264', '远距离配送费¥1', '2752', '589', '4.6', '15', '21.4764', '30', '109.145', '50f3c59751aba2060601a8c69c93da82png');
INSERT INTO `restaurants_table` VALUES ('0', 'E2605332192185664081', '金大陆川湘味海鲜烧烤', '981', '配送费¥3', '422', '206', '4.4', '30', '21.4724', '43', '109.118', '9e025be828699bb77f10921de432e6bfjpeg');
INSERT INTO `restaurants_table` VALUES ('1', 'E7041744804091624305', '麻辣烫.过桥米线.砂锅面(湖南路店)', '2602', '免配送费', '1949', '3175', '4.8', '18', '21.4743', '31', '109.141', 'dbee756d8d61e8f9911417f1149537ebjpeg');
INSERT INTO `restaurants_table` VALUES ('2', 'E162107560383556185', '黄记桂林米粉(京泰路店)', '1305', '免配送费', '370', '104', '4.6', '15', '21.4603', '20', '109.127', 'c56b17e926dc3991e254453c9b6937e2png');
INSERT INTO `restaurants_table` VALUES ('3', 'E12021153508733460274', '和睦牛肉饭', '1637', '免配送费', '2636', '328', '4.5', '15', '21.4682', '20', '109.111', '1232fc2ee894eaf13bb11f893d96b29djpeg');
INSERT INTO `restaurants_table` VALUES ('7', 'E11700276732585839914', '云行天下云吞店', '2390', '免配送费', '1443', '315', '4.7', '15', '21.4752', '24', '109.108', '2f08d0fcea4fa33374c4be95cf3baf74png');
INSERT INTO `restaurants_table` VALUES ('4', 'E14047391910663288096', '英正兴炸鸡店·韩式炸鸡·小吃', '1943', '配送费¥1', '91', '42', '4.2', '15', '21.4764', '22', '109.132', '1e04e58ac705e7f1a35b9e3f0b2da86bjpeg');
INSERT INTO `restaurants_table` VALUES ('5', 'E1103899237795822779', '黄记桂林米粉(陈文村分店)', '705', '免配送费', '569', '167', '4.6', '15', '21.4689', '20', '109.127', '9820da5260d5c95ea428513967425de5jpeg');
INSERT INTO `restaurants_table` VALUES ('6', 'E17100070474916324053', '刘蔚家常小炒(好滋味家常小炒店)', '2764', '配送费¥3', '622', '211', '4.5', '15', '21.481', '33', '109.11', '34dce1a374be3f48ba72b0ffd83dc1eapng');

-- ----------------------------
-- Table structure for restaurant_table
-- ----------------------------
DROP TABLE IF EXISTS `restaurant_table`;
CREATE TABLE `restaurant_table` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `restaurant_id` varchar(64) CHARACTER SET latin1 DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `distance` mediumint(9) DEFAULT NULL,
  `tips` varchar(32) DEFAULT NULL,
  `recent_order_num` mediumint(9) DEFAULT NULL,
  `rating_count` int(10) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `float_delivery_fee` tinyint(4) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `order_lead_time` varchar(16) DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `image_path` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of restaurant_table
-- ----------------------------
INSERT INTO `restaurant_table` VALUES ('1', 'E1760582611490519654', '黄李记三中路店', '2354', '免配送费', '3711', '987', '4.6', '15', '21.4728', '24', '109.107', '0352d24b063562f1cd9623ce26d02e2fjpeg');
INSERT INTO `restaurant_table` VALUES ('2', 'E2605332192185664081', '金大陆川湘味海鲜烧烤', '981', '配送费¥3', '422', '206', '4.4', '30', '21.4724', '43', '109.118', '9e025be828699bb77f10921de432e6bfjpeg');
INSERT INTO `restaurant_table` VALUES ('3', 'E12148387977432232564', '必胜客宅急送(北海财富广场店)', '1624', '配送费¥5', '248', '60', '4.6', '0', '21.4752', '40', '109.115', '25fd73e0d0e67056b03caad6abdae971png');
INSERT INTO `restaurant_table` VALUES ('4', 'E7041744804091624305', '麻辣烫.过桥米线.砂锅面(湖南路店)', '2602', '免配送费', '1949', '3175', '4.8', '18', '21.4743', '31', '109.141', 'dbee756d8d61e8f9911417f1149537ebjpeg');
INSERT INTO `restaurant_table` VALUES ('5', 'E11766241421194778987', '北方滋味', '548', '免配送费', '1193', '370', '4.7', '15', '21.4674', '21', '109.119', '81b62c8ac7a0af0df080764a0181cd47jpeg');
INSERT INTO `restaurant_table` VALUES ('6', 'E162107560383556185', '黄记桂林米粉(京泰路店)', '1305', '免配送费', '370', '104', '4.6', '15', '21.4603', '20', '109.127', 'c56b17e926dc3991e254453c9b6937e2png');
INSERT INTO `restaurant_table` VALUES ('7', 'E8823814591035289285', '鼎尚七好(便当品质店)', '713', '免配送费', '10129', '2072', '4.6', '15', '21.4719', '20', '109.121', '974919522cfc2ea3bd07eaca9fbff996jpeg');
INSERT INTO `restaurant_table` VALUES ('8', 'E12021153508733460274', '和睦牛肉饭', '1637', '免配送费', '2636', '328', '4.5', '15', '21.4682', '20', '109.111', '1232fc2ee894eaf13bb11f893d96b29djpeg');
INSERT INTO `restaurant_table` VALUES ('9', 'E5318948603853693107', '马来一号·海南鸡饭(鑫丰丽景店)', '3264', '远距离配送费¥1', '2752', '589', '4.6', '15', '21.4764', '30', '109.145', '50f3c59751aba2060601a8c69c93da82png');
INSERT INTO `restaurant_table` VALUES ('10', 'E14047391910663288096', '英正兴炸鸡店·韩式炸鸡·小吃', '1943', '配送费¥1', '91', '42', '4.2', '15', '21.4764', '22', '109.132', '1e04e58ac705e7f1a35b9e3f0b2da86bjpeg');
INSERT INTO `restaurant_table` VALUES ('11', 'E9926221537013946719', '山口肥叔鸭饭', '1500', '免配送费', '1283', '325', '4.2', '15', '21.4749', '22', '109.116', 'd240cb1d009893d1d5aaaac6434cbf94png');
INSERT INTO `restaurant_table` VALUES ('12', 'E1103899237795822779', '黄记桂林米粉(陈文村分店)', '705', '免配送费', '569', '167', '4.6', '15', '21.4689', '20', '109.127', '9820da5260d5c95ea428513967425de5jpeg');
INSERT INTO `restaurant_table` VALUES ('13', 'E7112454686423817270', '品匠小煲煲', '245', '配送费¥1', '1942', '343', '4.4', '15', '21.4691', '20', '109.123', 'ef5b3c18bd1552702ac2549c14a9002apng');
INSERT INTO `restaurant_table` VALUES ('14', 'E17100070474916324053', '刘蔚家常小炒(好滋味家常小炒店)', '2764', '配送费¥3', '622', '211', '4.5', '15', '21.481', '33', '109.11', '34dce1a374be3f48ba72b0ffd83dc1eapng');
INSERT INTO `restaurant_table` VALUES ('15', 'E3104215945845962846', '沙虫皇粥粉', '746', '免配送费', '436', '108', '4.4', '15', '21.47', '20', '109.118', '0015b8b9ec9a9e3e2e4ccc08c088a27epng');
INSERT INTO `restaurant_table` VALUES ('16', 'E11700276732585839914', '云行天下云吞店', '2390', '免配送费', '1443', '315', '4.7', '15', '21.4752', '24', '109.108', '2f08d0fcea4fa33374c4be95cf3baf74png');
