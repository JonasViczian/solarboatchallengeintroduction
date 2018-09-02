document.getElementById("app").innerHTML = `

`;

var mymap = L.map("mapid").setView([39.6157, 19.9289], 8);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoiam9uYXN2IiwiYSI6ImNqbGwwc3dieDBzdHczcHBhbW91MDd3bnQifQ.STmareBvr55Ag_z0kjW9TQ"
  }
).addTo(mymap);

var aroundKorfu = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        markersymbol: "checkpoint",
        markervalue: 6
      },
      geometry: {
        type: "Point",
        coordinates: [20.067901611328125, 39.46588451142044]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "checkpoint",
        markervalue: 5
      },
      geometry: {
        type: "Point",
        coordinates: [20.13298273086548, 39.378778944412424]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "fuel",
        markervalue: "F2"
      },
      geometry: {
        type: "Point",
        coordinates: [20.134999752044678, 39.23506201215488]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "checkpoint",
        markervalue: 4
      },
      geometry: {
        type: "Point",
        coordinates: [20.045258402824402, 39.37170046440551]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "checkpoint",
        markervalue: 3
      },
      geometry: {
        type: "Point",
        coordinates: [19.871971607208252, 39.43305244794944]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "campsite",
        markervalue: "A1"
      },
      geometry: {
        type: "Point",
        coordinates: [19.667587280273438, 39.71801492641796]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "checkpoint",
        markervalue: 1
      },
      geometry: {
        type: "Point",
        coordinates: [19.839978218078613, 39.83181920343139]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "fuel",
        markervalue: "F0"
      },
      geometry: {
        type: "Point",
        coordinates: [19.581756591796875, 39.876941584329195]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "checkpoint",
        markervalue: 0
      },
      geometry: {
        type: "Point",
        coordinates: [19.9289470911026, 39.61566455928928]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "checkpoint",
        markervalue: 2
      },
      geometry: {
        type: "Point",
        coordinates: [19.615616798400875, 39.753557991211025]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "fuel",
        markervalue: "F1"
      },
      geometry: {
        type: "Point",
        coordinates: [19.708871841430664, 39.67293271924073]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "fuel",
        markervalue: "F3"
      },
      geometry: {
        type: "Point",
        coordinates: [20.003249645233154, 39.453194264905086]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "campsite",
        markervalue: "A0"
      },
      geometry: {
        type: "Point",
        coordinates: [19.719085693359375, 39.79482037706643]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "campsite",
        markervalue: "A3"
      },
      geometry: {
        type: "Point",
        coordinates: [20.072665214538574, 39.45751848604508]
      }
    },
    {
      type: "Feature",
      properties: {
        markersymbol: "campsite",
        markervalue: "A2"
      },
      geometry: {
        type: "Point",
        coordinates: [20.093524754047394, 39.36645023189437]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "0-1",
        strokemiles: 19.87,
        stroketype: "direct",
        strokecolor: "#008000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.92894172668457, 39.615722413146734],
          [19.937095642089844, 39.619970407119],
          [19.923019409179688, 39.69741334474737],
          [19.93194580078125, 39.71775084250469],
          [19.965591430664062, 39.777671949699325],
          [19.940185546875, 39.80431612840032],
          [19.83996748924255, 39.8318150839449]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "1-A0",
        strokemiles: 6.79,
        stroketype: "anchor",
        strokecolor: "#ff8000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.83995944261551, 39.83180684497115],
          [19.720458984375, 39.796930657340724]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "1-F0",
        strokemiles: 14.08,
        stroketype: "fuel",
        strokecolor: "#0000ff"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.83995407819748, 39.831821263174554],
          [19.581413269042965, 39.876678109963564]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "1-2",
        strokemiles: 13.62,
        stroketype: "direct",
        strokecolor: "#008000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.83996480703354, 39.83181920343139],
          [19.760284423828125, 39.81565655737367],
          [19.682135581970215, 39.80355783532331],
          [19.671921730041504, 39.8009202290554],
          [19.646644592285156, 39.781497738489925],
          [19.61559534072876, 39.75362397799486]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "A0-2",
        strokemiles: 7.16,
        stroketype: "anchor",
        strokecolor: "#ff8000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.719085693359375, 39.79534795320513],
          [19.692306518554688, 39.805371130943854],
          [19.67273712158203, 39.80167855121973],
          [19.657974243164062, 39.791127230787914],
          [19.61560606956482, 39.753632226338404]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "F0-2",
        strokemiles: 8.72,
        stroketype: "fuel",
        strokecolor: "#0000ff"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.580726623535156, 39.87680984727289],
          [19.6155846118927, 39.75361572965035]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "2-A1",
        strokemiles: 5.09,
        stroketype: "anchor",
        strokecolor: "#ff8040"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.61557388305664, 39.75364047468096],
          [19.638233184814453, 39.7120727937937],
          [19.657630920410156, 39.70745078118559],
          [19.667372703552246, 39.717882884587716]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "2-F1",
        strokemiles: 8.82,
        stroketype: "fuel",
        strokecolor: "#0000ff"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.6155846118927, 39.75364047468096],
          [19.634971618652344, 39.715638134796336],
          [19.660720825195312, 39.681693899805765],
          [19.6929931640625, 39.665178023605506],
          [19.70921516418457, 39.668415446468934],
          [19.709386825561523, 39.67109941928575],
          [19.708861112594604, 39.672982267212916]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "2-3",
        strokemiles: 26.13,
        stroketype: "direct",
        strokecolor: "#008000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.61559534072876, 39.75361572965035],
          [19.658660888671875, 39.675484393594814],
          [19.871907234191895, 39.433102167543595]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "3-4",
        strokemiles: 10.19,
        stroketype: "direct",
        strokecolor: "#008000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.871928691864014, 39.43311045413919],
          [20.04524230957031, 39.371729493029775]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "A1-3",
        strokemiles: 23.08,
        stroketype: "anchor",
        strokecolor: "#ff8040"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.667415618896484, 39.71784987409067],
          [19.664840698242188, 39.66914219401813],
          [19.871939420700073, 39.43311045413919]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "F1-3",
        strokemiles: 18.91,
        stroketype: "fuel",
        strokecolor: "#0000ff"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.708861112594604, 39.672965751226144],
          [19.718399047851562, 39.629490255945086],
          [19.871907234191895, 39.433102167543595]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "4-A2",
        strokemiles: 2.76,
        stroketype: "anchor",
        strokecolor: "#ff8000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.045253038406372, 39.37171705219228],
          [20.088114738464355, 39.36282128599673],
          [20.09073257446289, 39.36438071899536],
          [20.09352207183838, 39.36645437915323]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "4-F2",
        strokemiles: 10.67,
        stroketype: "fuel",
        strokecolor: "#0000ff"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.04524230957031, 39.37172534608422],
          [20.1344633102417, 39.24029718061152],
          [20.133647918701172, 39.238261328187235],
          [20.13347625732422, 39.23600935730056],
          [20.13497292995453, 39.235095252551965]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "F2-5",
        strokemiles: 9.99,
        stroketype: "fuel",
        strokecolor: "#0000ff"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.134999752044678, 39.23508694245416],
          [20.13343334197998, 39.236025977276654],
          [20.13369083404541, 39.23828625734971],
          [20.136137008666992, 39.25837628126051],
          [20.132961273193356, 39.37879553051745]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "A2-5",
        strokemiles: 3.17,
        stroketype: "anchor",
        strokecolor: "#ff8000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.09351670742035, 39.36644815826485],
          [20.099787712097168, 39.360747517967496],
          [20.10961532592773, 39.357197084170735],
          [20.120601654052734, 39.360050718090534],
          [20.132961273193356, 39.378778944412424]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "4-5",
        strokemiles: 5.67,
        stroketype: "direct",
        strokecolor: "#008000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.04524767398834, 39.37171497871917],
          [20.10875701904297, 39.35713071920419],
          [20.12068748474121, 39.35998435583497],
          [20.132961273193356, 39.37879553051745]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "5-A3",
        strokemiles: 6.33,
        stroketype: "anchor",
        strokecolor: "#ff8040"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.132966637611386, 39.378783090939045],
          [20.072665214538574, 39.457485351272155]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "A3-6",
        strokemiles: 0.65,
        stroketype: "anchor",
        strokecolor: "#ff8040"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.072643756866455, 39.457501918660604],
          [20.07275104522705, 39.4593905750957],
          [20.067944526672363, 39.4658513806301]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "5-6",
        strokemiles: 6.96,
        stroketype: "direct",
        strokecolor: "#008000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.13295590877533, 39.37878723746543],
          [20.067901611328125, 39.46588451142044]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "6-F3",
        strokemiles: 3.56,
        stroketype: "fuel",
        strokecolor: "#0000ff"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.06781578063965, 39.46588451142044],
          [20.00323355197906, 39.45321911751813]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "F3-0",
        strokemiles: 11.96,
        stroketype: "fuel",
        strokecolor: "#0000ff"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.003244280815125, 39.45320669121274],
          [20.00430107116699, 39.45617651512549],
          [19.928920269012448, 39.615705883478114]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        strokeoption: "6-0",
        strokemiles: 12.74,
        stroketype: "direct",
        strokecolor: "#008000"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.067858695983887, 39.46588451142044],
          [19.92894172668457, 39.61567282412901]
        ]
      }
    }
  ]
};

var fuelIcon = new L.icon({
  iconUrl:
    "https://uploads.codesandbox.io/uploads/user/5c7d103c-26d3-4bcf-8b26-e3ed25117c70/YR0f-baseline_ev_station_black_24dp.png",
  iconSize: [20, 20],
  iconAnchor: [13, 13]
});
var checkpointIcon = new L.icon({
  iconUrl:
    "https://uploads.codesandbox.io/uploads/user/5c7d103c-26d3-4bcf-8b26-e3ed25117c70/D3ZQ-baseline_explore_black_24dp.png",
  iconSize: [20, 20],
  iconAnchor: [13, 13]
});
var campsiteIcon = new L.icon({
  iconUrl:
    "https://uploads.codesandbox.io/uploads/user/5c7d103c-26d3-4bcf-8b26-e3ed25117c70/oi2v-baseline_beach_access_black_24dp.png",
  iconSize: [20, 20],
  iconAnchor: [13, 13]
});
L.geoJSON(aroundKorfu, {
  style: function(feature) {
    switch (feature.properties.stroketype) {
      case "direct":
        return { color: feature.properties.strokecolor };
      case "fuel":
        return { color: feature.properties.strokecolor };
      case "anchor":
        return { color: feature.properties.strokecolor };
    }
  },
  pointToLayer: function(feature, latlng) {
    switch (feature.properties.markersymbol) {
      case "fuel":
        return L.marker(latlng, { icon: fuelIcon });
      case "checkpoint":
        return L.marker(latlng, { icon: checkpointIcon });
      case "campsite":
        return L.marker(latlng, { icon: campsiteIcon });
    }
  }
}).addTo(mymap);
