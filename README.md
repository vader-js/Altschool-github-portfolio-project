# Github Portfolio Project

## A simple app written with react using github api to showcase details about your repositories in a mini-portfolio.

# Description
This project was born as a choice from series of project designed by AltSchool in order to test my knowledge on:

- API fetch
    - using the github REST api to access publicly available information
- Pagination
- React routes
- SEO
- Error Boundary

This App is designed to accept your Github username and with that, returns a list of your repositories (publicly available) which includes a link, which once "clicked" you will be directed to another page showcasing a card-like portfolio detailing some information of this particular repository such as:
- A profile image
- Username 
- Date of creation
- Number of stars
- Number of watchers
- Topics
- Number of issues e.t.c

# How To Use
## Search input 
![the input field](/src/Assets/images/generate.png)

submit your Github username into the input field and click <button>Generate</button> to return a list of your repositories.

If  <button>Generate</button> is clicked while the input field is empty, an Error will be thrown resulting from react-error-boundary. 

## Repository list
![repo list](/src/Assets/images/repolist.png)

A list of your repositories are generated and displayed with a maximum of four results per page, which is accompliahsed as a result of server-side pagination.
the list details:
- A username
- The project name
- A Url

on Clicking the Url, you are directed to a page providing more imformation about the particular repository in a card-like portfolio.

![card-like portfolio](/src/Assets/images/card-portfolio.png)

This card-like portfolio has a "view repo" link that redirects you to the Github page containing that particular repository.

# Hosting Link
This project is Hosted on Netlify, and can be visited here: [Vader's Github Portfolio App](https://vaders-github-portfolio.netlify.app/ "may the force be with you!")
    