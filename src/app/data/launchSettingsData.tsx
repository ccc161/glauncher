import createResolutionSettingsView from "../view/launchSettings";

export const Resolution720p = createResolutionSettingsView(1, "720p", 1280, 720);
export const Resolution1080p = createResolutionSettingsView(2, "1080p", 1920, 1080);
export const Resolution2k = createResolutionSettingsView(3, "2k", 2560, 1440);
export const Resolution4k = createResolutionSettingsView(4, "720p", 3840, 2160);