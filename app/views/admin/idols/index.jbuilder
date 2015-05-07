json.array!(@idols) do |idol|
  json.extract! idol, :id, :name
  json.words [idol.name, idol.kana].join(" ")
end
