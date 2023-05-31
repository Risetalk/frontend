


import React from "react";

import PostUser from "../../components/Blog/PostUser"
import AllPost from "../../components/Blog/AllPost";
export default function Blogs(){
   
    return(
        <div className="flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Este es el blog</h1>
        <PostUser />
        <AllPost />
      </div>
    </div>
    )
}



