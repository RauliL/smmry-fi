import { createSummary } from ".";

const input = `
Vaikka osaltamme onkin saatettu syyllistyä laiminlyönteihin, voidaan
taholtamme kuitenkin todeta, että paradoksaalinen ajattelutapa mallintaa
kokonaiskuvaa käyttäen hyödykseen esimerkiksi vastuuntuntoisten
yhteistyökumppaneiden aatteellisia intressejä.

On hyvin vaikea johdatella asioita siten, että kokonaisvaltainen työtapa
ratkaisee ongelmia tutkittaessa laajentuvia markkinoita ja uusia
induktiivisia tuotantomenetelmiä.

Ei tarvita syvällistä ymmärtämystä sen käsittämiseen, että vakiintunut
elämäntapa johdattelee meidät ja tukiryhmämme kohti tahojen yhteistyön
kariutumisesta aiheutuvia hyökyaaltoja rahoitus- ja sijoitussektorilla.

Eräitä yksityiskohtia lukuunottamatta luovien näkemysten huomiointi kuvailee
asianosaisiin kohdistuvia ongelmia.

Matemaatikotkaan eivät kysele mitä numerot ovat, mutta tarveharkintadialogi
näyttää todeksi tulevaa taloudellista ja teollista behaviorismia.

Vaikka usein kuuleekin aivan järjettömiä mielipiteitä, on kuitenkin tosiasia,
että paradoksaalinen ajattelutapa mallintaa kokonaiskuvaa käyttäen hyödykseen
esimerkiksi reaktiota tämänhetkisen tilanteen suhteen.

Tilastot osoittavat, että kokonaisvaltainen työtapa auttaa käyttäjää
ymmärtämään ilmiöiden liiallista nonfiguratiivisuutta.
`.trim();

const expectedResult = `
Vaikka osaltamme onkin saatettu syyllistyä laiminlyönteihin, voidaan
taholtamme kuitenkin todeta, että paradoksaalinen ajattelutapa mallintaa
kokonaiskuvaa käyttäen hyödykseen esimerkiksi vastuuntuntoisten
yhteistyökumppaneiden aatteellisia intressejä. Vaikka usein kuuleekin aivan järjettömiä mielipiteitä, on kuitenkin tosiasia,
että paradoksaalinen ajattelutapa mallintaa kokonaiskuvaa käyttäen hyödykseen
esimerkiksi reaktiota tämänhetkisen tilanteen suhteen.
`.trim();

it("should create short summary of long text", () => {
  expect(createSummary(input, 2)).toEqual(expectedResult);
});
