self.getLocalDir = function() {
  let DB_NAME = 'localCache';
  let DB_VERSION = 1;
  let STORE = 'cache';
  let KEY_NAME = 'filesDir';
  return new Promise(function(resolve, reject) {
    var open = indexedDB.open(DB_NAME, DB_VERSION);
    open.onerror = function(event) {
      reject('error while opening indexdb cache');
    };

    open.onsuccess = function(event) {
      let db = event.target.result, result;
      result = db.transaction([STORE])
        .objectStore(STORE)
        .get(KEY_NAME);
      result.onsuccess = function(event) {
        if (!event.target.result) {
          reject('filesDir not set');
        } else {
          resolve(JSON.parse(event.target.result.value));
        }
      };
      result.onerror = function(event) {
        reject('error while getting playthroughDir');
      };
    }
  });
};

self.addEventListener('fetch', function fetcher(event) {
  let url = event.request.url;
  if (url.indexOf("s3") > -1) {
    //redirect to local stored file
    event.respondWith(getLocalDir().then(function(filesDir){
        url = "file://" + filesDir + self.getPath(url);
        var responseInit = {
          status: 302,
          statusText: 'Found',
          headers: {
            Location: url
          }
        };
        return new Response('', responseInit);
    }));
};