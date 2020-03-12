const chooseStations = (stations) => {
  const goodStations = []
  for (const station of stations) {
    // Capacity >= 20
    // Must be a school or community centre
    if (station[1] >= 20 && (station[2] == "school" || station[2] == "community centre")) {
      goodStations.push(station[0]);
    }
  }
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);
