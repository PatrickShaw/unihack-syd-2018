import Google from '@google/maps';
// This class and type script definitions adapted from 
// github user: lukas-zech-software
// https://gist.github.com/lukas-zech-software/a7e4a23a6833ec1abb1fc836138f7822

class GeoCodingServiceClient {

  constructor() {
    this.geoCoder = Google.createClient({
      // Google Places API key.
      key: 'AIzaSyB1C7uVikja7TS-cbL3SdUufxJdrKTFurk',
    });

  }

  geocodeAddress(addressToQuery) {
    return new Promise((resolve, reject) => {
      const request = {
        address: addressToQuery
      };
      this.geoCoder.geocode(request, (error, response) => {        
        if (error == null) {
          resolve(response.json.results);
        } else {
          reject(error);  
        }
      });
    });

  }
}

export default GeoCodingServiceClient;
export {GeoCodingServiceClient}; 
