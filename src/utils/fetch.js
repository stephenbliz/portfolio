import { gql } from "@apollo/client";

export const getProjects = gql`
    query MyQuery {
        portfolioProjects {
            title
            slug
            id
            previewLink
            image {
            alt
            url
            }
            excerpt
            colour
            description {
            text
            }
        }
    }
`

export const getPortfolioAuthor = gql`
    query MyQuery($slug: String!) {
        portfolioAuthor(where: {slug: $slug}) {
            excerpt
            description {
            raw
            }
            facebook
            linkedin
            name
            photo {
            alt
            url
            id
            fileName
            }
            slug
            tiktok
            title
            twitter
        }
    }
`