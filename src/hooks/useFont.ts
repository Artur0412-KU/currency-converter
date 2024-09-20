import { useEffect, useState } from "react"
import * as Font from 'expo-font'
import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

export const useFont = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
          await Font.loadAsync({
            Roboto_300Light,
            Roboto_400Regular,
            Roboto_500Medium,
            Roboto_700Bold
          });
          setFontsLoaded(true);
        };
    
        loadFonts();
    }, []);

    return fontsLoaded;
}