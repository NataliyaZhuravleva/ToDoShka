1. API to get geographic coordinates of city 
https://api.opentripmap.com/0.1/en/places/geoname?name=Las%20Vegas&country=US&apikey=[MY_API_KEY]
Response sample:
{
    "name": "las vegas",
    "country": "US",
    "lat": 36.17497,
    "lon": -115.13722,
    "population": 623747,
    "timezone": "America/Los_Angeles",
    "status": "OK"
}

2. API to get objects (with  xid) closest to the selected point filtered by parameters. kinds - object category (https://opentripmap.io/catalog). radius in meters.
https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=-115.13722&lat=36.17497&kinds=pools%2Cbars&apikey=[MY_API_KEY]
Response sample:
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "5648992",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.139297,
          36.17485
        ]
      },
      "properties": {
        "xid": "N6554777927",
        "name": "Municipal Pool",
        "dist": 187.2517528,
        "rate": 1,
        "osm": "node/6554777927",
        "kinds": "sport,pools"
      }
    },
    {
      "type": "Feature",
      "id": "1472543",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.141228,
          36.172195
        ]
      },
      "properties": {
        "xid": "N2161291762",
        "name": "Mob Bar",
        "dist": 474.01058999,
        "rate": 1,
        "osm": "node/2161291762",
        "kinds": "foods,bars,tourist_facilities"
      }
    },
  ]
}

3. API to get object properties:
https://api.opentripmap.com/0.1/en/places/xid/Q61906139?apikey=[MY_API_KEY]
Response sample:
{
  "xid": "Q61906139",
  "name": "Las Vegas Rocks Cafe",
  "address": {
    "city": "Las Vegas",
    "road": "Fremont Street",
    "house": "Neonopolis",
    "state": "Nevada",
    "county": "Clark County",
    "suburb": "Five Points",
    "country": "United States of America",
    "postcode": "89101",
    "country_code": "us",
    "house_number": "450",
    "neighbourhood": "Cultural Corridor"
  },
  "rate": "2",
  "wikidata": "Q61906139",
  "kinds": "cultural,theatres_and_entertainments,nightclubs,interesting_places,adult,music_venues,foods,bars,tourist_facilities",
  "sources": {
    "geometry": "wikidata",
    "attributes": [
      "wikidata"
    ]
  },
  "otm": "https://opentripmap.com/en/card/Q61906139",
  "image": "https://commons.wikimedia.org/wiki/File:Las_Vegas_2009_39_-_panoramio.jpg",
  "preview": {
    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Las_Vegas_2009_39_-_panoramio.jpg/400px-Las_Vegas_2009_39_-_panoramio.jpg",
    "height": 300,
    "width": 400
  },
  "point": {
    "lon": -115.141235,
    "lat": 36.169872
  }
}
