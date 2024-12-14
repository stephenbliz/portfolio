import { gql } from "@apollo/client";

export const get4Projects = gql`
    query MyQuery {
        portfolioProjects(first: 4, orderBy: createdAt_DESC) {
            colour
            excerpt
            id
            image {
            alt
            url
            }
            title
            slug
        }
    }
`

export const getAllProjects = gql`
    query MyQuery {
        portfolioProjects(orderBy: createdAt_DESC) {
            colour
            excerpt
            id
            image {
            alt
            url
            }
            title
            slug
        }
    }
`

export const getProject = gql`
    query MyQuery($slug: String!) {
        portfolioProject(where: {slug: $slug}) {
            description {
            markdown
            }
            image {
            alt
            url
            }
            previewLink
            slug
            title
            sourceCode
        }
    }
`

export const getPortfolioAuthor = gql`
    query MyQuery($slug: String!) {
        portfolioAuthor(where: {slug: $slug}) {
            excerpt
            description {
            markdown
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
export const createMessage = gql`
    mutation CreateMessage($name: String!, $email: String!, $subject: String!, $details: String!){
        createPortfolioMessage(data: {name: $name,email: $email,subject: $subject,details: $details}){
            id
        }
    }
`