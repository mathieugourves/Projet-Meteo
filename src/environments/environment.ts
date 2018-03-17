// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    API_URL: "http://localhost:3000/api",
    SUFFIX_API_MUSICS: "musics",
    SUFFIX_API_MUSIC: "music",
    SUFFIX_API_ARTISTS: "artists",
    SUFFIX_API_ARTIST: "artist",
    SUFFIX_API_ALBUMS: "albums",
    SUFFIX_API_ALBUM: "album"
};
