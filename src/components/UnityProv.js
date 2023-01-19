import React, { useState, useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { UserService } from '../UserService';


function UnityProv(){
    const { unityProvider, isLoaded, sendMessage } = useUnityContext({
        loaderUrl: "/Build/dolprun8.loader.js",
        dataUrl: "/Build/dolprun8.data",
        frameworkUrl: "/Build/dolprun8.framework.js",
        codeUrl: "/Build/dolprun8.wasm",
    });

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://testatomic.3dkrender.com/atomicassets/v1/assets?template_id=144693&owner='+ UserService.authName +'&page=1&limit=100&order=desc&sort=asset_id');
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);
    const Assets = ({data});
    if (isLoaded && Assets.data.data.length > 0){
        sendMessage("PlayerData", "SetPlayerHasDolku", 2);
    }else{
        sendMessage("PlayerData", "SetPlayerHasDolku", 1);
    }
    return (
        <div className="UnityProv">
            <Unity unityProvider={unityProvider} style={{ width: 1010, height: 504, display: isLoaded ? "block" : "none" }}/>
        </div>
    );
}
export default UnityProv;