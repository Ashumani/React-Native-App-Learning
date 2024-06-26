import React from "react";
import * as webbrowser from "expo-web-browser";

export const useWarmUpBrowser = () =>{
    React.useEffect(() => {
        void webbrowser.warmUpAsync();
        return () =>{ 
            void webbrowser.coolDownAsync();
    };
},[]);
};