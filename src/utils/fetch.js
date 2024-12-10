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