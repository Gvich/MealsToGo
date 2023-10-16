import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantsContextProvider } from "./src/services/restauranst/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

// import * as firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCDGfbbdnA_Og0_Ohe6O8CSJoN29Sqy6F8",
//   authDomain: "mealtogo-3134d.firebaseapp.com",
//   projectId: "mealtogo-3134d",
//   storageBucket: "mealtogo-3134d.appspot.com",
//   messagingSenderId: "67817754551",
//   appId: "1:67817754551:web:0ce2bfeca654e31bbda232"
// };
//
// if (firebase.app.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     firebase
  //         .auth()
  //         .signInWithEmailAndPassword("mo@binni.io", "test123")
  //         .then((user) => {
  //           setIsAuthenticated(true);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //         });
  //   }, 2000);
  // }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  // if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
