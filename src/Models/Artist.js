export class Artist {
 constructor(data){
  this.id = data.message.body.artist_list[0].artist.artist_id
  this.name - data.message.body.artist_list[0].artist.artist_name
  this.country = data.message.body.artist_list[0].artist.artist_country
 }
}