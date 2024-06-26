// import { gql, request } from 'graphql-request'

// const MASTER_URL = 'https://api.spacex.land/graphql/'
// const getSlider= async() =>{
//     const document = gql`
//     query GetSlider {
//         sliders {
//           id
//           name
//           image {
//             url
//           }
//         }
//       }
//     `
// const result = await request(MASTER_URL, document)

// return result
// }

// export default{
//     getSlider
// }



//---------------------------------------Custom methods--------------------------------

const slider = {
  "data": {
    "sliders": [
      {
        "id": "clxrhyt821nio07o2v5tpdh8i",
        "name": "Slider1",
        "image": {
          "url": "https://ap-south-1.graphassets.com/clxr5gmhl0khy07pncszg0q2x/clxrhwpus1njk07of5jsa1bev"
        }
      },
      {
        "id": "clxri15oc1nl307o2vgg29fof",
        "name": "sider2",
        "image": {
          "url": "https://ap-south-1.graphassets.com/clxr5gmhl0khy07pncszg0q2x/clxri0vvj1nkl07o2t6kzber9"
        }
      },
      {
        "id": "clxri15oc1nl307o2vgg29fog",
        "name": "sider2",
        "image": {
          "url": "https://ap-south-1.graphassets.com/clxr5gmhl0khy07pncszg0q2x/clxrhwpus1njk07of5jsa1bev"
        }
      },
      {
        "id": "clxri15oc1nl307o2vgg29foh",
        "name": "sider2",
        "image": {
          "url": "https://ap-south-1.graphassets.com/clxr5gmhl0khy07pncszg0q2x/clxri0vvj1nkl07o2t6kzber9"
        }
      }
    ]
  }
}

const MASTER_URL = 'https://api.spacex.land/graphql/'
const getSlider= async() =>{

    return slider
}

export default{
    getSlider
}