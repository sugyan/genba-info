json.array!(@locations) do |location|
  json.id location.to_param
  json.extract! location, :name, :address
  json.words [location.administrative_area, location.locality, location.name].join(" ")
end
