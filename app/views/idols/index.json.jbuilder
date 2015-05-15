json.array!(@idols) do |idol|
  json.id idol.to_param
  json.name idol.name
end
