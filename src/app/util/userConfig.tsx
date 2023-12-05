


// src/app/util/userConfig.ts
export const fetchUserConfig = async (): Promise<any> => {
    const response = await fetch('src/app/data/userSettings.json');
    const config = await response.json();
    return config;
};

let userConfig = null

export default userConfig;