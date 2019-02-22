export interface Posts{
    postid:number,
    title:string,
    postdata:string
}

export interface StoreState {
      posts : Array<Posts>,
      iserror:boolean,
      isloading:boolean
      
}