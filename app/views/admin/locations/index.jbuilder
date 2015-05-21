json.array!(@locations) do |location|
  json.extract! location, :id, :name, :address, :geohash
  json.words [location.name, location.administrative_area, location.locality].join(" ")
end
