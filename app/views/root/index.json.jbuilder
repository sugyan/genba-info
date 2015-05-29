json.genbas do
  json.array!(@genbas) do |genba|
    json.merge! genba.attributes_for_list
  end
end
json.last_page @genbas.last_page?
