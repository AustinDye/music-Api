import { transformWithEsbuild } from "vite"

export class House{
 constructor(data){
  this.id = data.id
  this.bedrooms = data.bedrooms
  this.bathrooms = data.bathrooms
  this.levels = data.levels
  this.imgUrl = data.imgUrl
  this.creator = data.creator
  this.cratorId = data.cratorId
 }
}