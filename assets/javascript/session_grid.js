var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'https://hack.opendata.ch/api/event/current/challenges.json', true);
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4) {
    if(xmlhttp.status == 200) {
      var obj = JSON.parse(xmlhttp.responseText);
      var sessions = obj.challenges;
      sessions.forEach(function(session) {
        updateSessionCell(session);
      })
    }
  }
};
xmlhttp.send(null);

function updateSessionCell(session) {
  elem('programm-session-title').innerHTML = session.name;
  elem('programm-session-description').innerHTML = session.summary;
  elem('programm-session-link').setAttribute('href', url());

  function elem(klass) {
    var selector = "#session-" + session.id + ' .' + klass
    return document.querySelectorAll(selector)[0]
  }

  function url() {
    return "https://hack.opendata.ch/project/" + session.id
  }
}


// new Vue({
//   el: "#session-grid",
//   data: {
//    info: undefined,
//    error: undefined,
//    timeTable: null,
//    rooms: [
//      {column: 'mainroom', name: 'Auditorium'},
//      {column: 'room1', name: 'Raum 1'},
//      {column: 'room2', name: 'Raum 2'},
//      {column: 'room3', name: 'Raum 3'},
//    ],
//    openSlotLabel: "Offener Slot für deine Session",
//   },
//   methods: {
//     getData: function() {
//       var options = {
//         callback: 'fn',
//         alt: 'json-in-script'
//       };
//       this.$http.jsonp('https://spreadsheets.google.com/feeds/list/15WkiIDfh8jYDHtr4gZviDfcgr1mHnbfBqKJyo8Ia82Y/1/public/values?alt=json-in-script', options).then(function(data) {
//         this.info = ''
//         this.timeTable = data
//       }, function(error) {
//         this.info = "Fehler beim Laden…";
//       });
//     }
//   }
// }).getData();






// 2PACX-1vSTvqvkV_arDWgfvJWj87Iab1bfBryu6BO_t8i3d-wctO4NhBeSPo7d-1bDW3PJYvTEWsNMLL5WEIj3

// https://spreadsheets.google.com/feeds/{{VIEW-TYPE}}/{{SPREADSHEET-ID}}/{{TAB-NUMBER}}/public/values


// view types:  cell or list

// https://spreadsheets.google.com/feeds/cell/15WkiIDfh8jYDHtr4gZviDfcgr1mHnbfBqKJyo8Ia82Y/1/public/values

// https://spreadsheets.google.com/feeds/list/15WkiIDfh8jYDHtr4gZviDfcgr1mHnbfBqKJyo8Ia82Y/1/public/values?alt=json-in-script&callback=loadData