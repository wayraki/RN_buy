/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { TabNavigator } from "react-navigation";

import Home from "./home/Home";
import Shop from "./shop/Shop";
import Order from "./order/Order";
import Mine from "./mine/Mine";

const Main = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '首页',
    }
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      title: '商家',
    },
  },
  Order: {
    screen: Order,
    navigationOptions: {
      title: '订单',
    },
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      title: '我的',
    },
  },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      indicatorStyle: { height: 0 },
    },
  },
);

// Main.navigationOptions = {
//   title: '首页',
// };

export default Main;
