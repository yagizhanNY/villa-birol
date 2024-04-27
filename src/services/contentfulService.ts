import type IComment from "@/models/comment";

const url = `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}`

export const getVideoUrl = async () => {
  const query = `{
        villaBirolVideoCollection{
          items {
            villaVideo {
              url
            }
          }
        }
      }`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_DELIVERY_ID}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })

  const contentfulResponse = await response.json();
  return contentfulResponse.data.villaBirolVideoCollection.items[0].villaVideo.url as string;
}

export const getAllImages = async () => {
  const query = `{
    villaBirolImagesCollection{
      items{
        imageCollection{
          items{
            url
          }
        }
      }
    }
  }`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_DELIVERY_ID}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })

  const contentfulResponse = await response.json();
  return contentfulResponse.data.villaBirolImagesCollection.items[0].imageCollection.items as {url: string}[];
}

export const getAllComments = async () => {
  const query = `{
    villaBirolCommentsCollection{
      items{
        comment,
        commentEn,
        publishedDate,
        author,
        rating
      }
    }
  }`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_DELIVERY_ID}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })

  const contentfulResponse = await response.json();
  return contentfulResponse.data.villaBirolCommentsCollection.items as IComment[];
}