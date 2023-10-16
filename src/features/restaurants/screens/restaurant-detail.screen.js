import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => (
            <List.Icon
              {...props}
              icon="bread-slice"
              color={breakfastExpanded ? "red" : "grey"}
            />
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          titleStyle={breakfastExpanded ? { color: "red" } : { color: "black" }}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => (
            <List.Icon
              {...props}
              icon="hamburger"
              color={lunchExpanded ? "red" : "grey"}
            />
          )}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          titleStyle={lunchExpanded ? { color: "red" } : { color: "black" }}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon
              {...props}
              icon="food-variant"
              color={dinnerExpanded ? "red" : "grey"}
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          titleStyle={dinnerExpanded ? { color: "red" } : { color: "black" }}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => (
            <List.Icon
              {...props}
              icon="cup"
              color={drinksExpanded ? "red" : "grey"}
            />
          )}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          titleStyle={drinksExpanded ? { color: "red" } : { color: "black" }}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
