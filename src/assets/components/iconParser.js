export default function iconParser() {

    // importAll() svgs from ../icons

    const importAll = (r) => {
        return r.keys().map(r);
    }


    const iconsRaw = importAll(require.context('../icons', false, /\.svg$/));

    const icons = iconsRaw.map(icon => {
        return {
            name: icon.default.split(',')[2].split('.')[0],
            folder: icon.default.split('/')[3].split(',')[0],
            iconType: icon.default.split(',')[1],
            url: icon.default,
        }
    });



    return icons;


}