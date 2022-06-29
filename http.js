//  var nd=require("needle");
//  var url = "https://jsonplaceholder.typicode.com/todos/1"
//  nd.get(url,(error,response,body)=>{
//      if(error)
//          console.log(error)
//      else    
//          console.log(body)
// })
// var nd=require("needle");
// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=e5ba74bf101bc2a3cffd676b2f4d6527&language=en-US&page=1"
//     nd.get(url,(error,response,body)=>{
//         if(error)
//           console.log(error)
//         else    
//             console.log(body)
//   })
// var nd=require("needle");
// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=e5ba74bf101bc2a3cffd676b2f4d6527&language=en-US&page=1"
//     nd.get(url,(error,response,body)=>{
//         if(error)
//           console.log(error)
//         else    
//             var result=body.results;
//             for(ele in result){
//                 console.log(result[ele].title);
//             }
//   })

//pk.eyJ1IjoiYXNoYWRlZXBpa2EiLCJhIjoiY2wzbzByemlpMGp5eDNwbTlxOGUzNG1wdSJ9.DCpNMKC-bXttMcJ0UlypDQ

// var nd=require("needle");
//   var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoiYXNoYWRlZXBpa2EiLCJhIjoiY2wzbzByemlpMGp5eDNwbTlxOGUzNG1wdSJ9.DCpNMKC-bXttMcJ0UlypDQ"

//   nd.get(url,(error,response,body)=>{
//       if(error)
//           console.log(error)
//       else    
//           console.log(JSON.parse(body));
//   })

// var nd=require("needle");
//   var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoiYXNoYWRlZXBpa2EiLCJhIjoiY2wzbzByemlpMGp5eDNwbTlxOGUzNG1wdSJ9.DCpNMKC-bXttMcJ0UlypDQ"

//   nd.get(url,(error,response,body)=>{
//       if(error)
//           console.log(error)
//       else    
//           console.log(body);
//   })

// var nd=require("needle");
//   var url = "http://api.weatherstack.com/current?access_key=89c3b56e3988a792f45b70c410543233"
//   nd.get(url,(error,response,body)=>{
//       if(error)
//           console.log(error)
//       else    
//           console.log(response.body.current.temperature);
//           console.log(body.current.location.lat);
//           for(ele in desc){
//               console.log(desc[ele]);
//           }
//   })

// var nd=require("needle");
// var url = "http://api.weatherstack.com/current?access_key=89c3b56e3988a792f45b70c410543233"
// nd.get(url,(error,response,body)=>{
//        if(error)
//            console.log(error)
//        else    
//            console.log(response.body.current.temperature);
//            console.log(body.location.lat);
//            console.log(body.location.lat);
//            for(ele in desc){
//                console.log(desc[ele]);
//            }
//    })
