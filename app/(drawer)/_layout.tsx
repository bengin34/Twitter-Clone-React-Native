import { Stack, withLayoutContext } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigator = createDrawerNavigator();

const Drawer = withLayoutContext(DrawerNavigator.Navigator);

export default function DrawerLayout() {
    return <Drawer />
}