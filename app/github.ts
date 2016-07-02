export class Github {
private name:string
private owner:string
private fullname:string
private forks:number
private watchers:number
private language:string
private subscribers:string
private updated: string
private contributorsUrl:string
private avatar:string
  constructor(obj?: any ) {
    this.name = obj && obj.name  || null;
    this.owner = obj && obj.owner  || null;
    this.fullname = obj && obj.fullname  || null;
    this.forks = obj && obj.forks  ;
    this.watchers = obj && obj.watchers  ;
    this.language = obj && obj.language  || null;
    this.subscribers = obj && obj.subscribers  || null;
    this.updated = obj && obj.updated  || null;
    this.contributorsUrl = obj && obj.contributorsUrl  || null;
    this.avatar = obj && obj.avatar  || null;
 
  }
}


