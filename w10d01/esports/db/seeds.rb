# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Running seed file..."

puts "Creating games"
10.times do
  Game.create(
    game_name: Faker::Esport.game
  )
end

puts "Get the games"
games = Game.all

puts "Creating players"
100.times do
  Player.create(
    player: Faker::Esport.player,
    team: Faker::Esport.team,
    event: Faker::Esport.event,
    game: games.sample
  )
end

puts "All done!"
