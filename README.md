<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Lyrefox/ga-project4-news">
    <img src="public/logo.png" alt="Logo">
  </a>

<h3 align="center">World Wide News</h3>

  <p align="center">
    This is an app that allows users to view news articles from multiple sources from across the word!
    <br />
    <a href="https://github.com/Lyrefox/ga-project4-news"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Lyrefox/ga-project4-news">View Demo</a>
    ·
    <a href="https://github.com/Lyrefox/ga-project4-news/issues">Report Bug</a>
    ·
    <a href="https://github.com/Lyrefox/ga-project4-news/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This is a website that display news articles from multiple sources around the world using the API newsapi.org.
Using this site you can filter news articles based on country or search for news articles.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

<!-- * [![Next][Next.js]][Next-url] -->
* [![React][React.js]][React-url]
* [![JavaScript][JavaScript]][JavaScript-url]
* Materia UI
<!-- * [![Angular][Angular.io]][Angular-url] -->
<!-- * [![Svelte][Svelte.dev]][Svelte-url] -->
<!-- * [![Laravel][Laravel.com]][Laravel-url] -->
<!-- * [![Bootstrap][Bootstrap.com]][Bootstrap-url] -->
<!-- * [![JQuery][JQuery.com]][JQuery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these steps to get a local copy of the site up and running in no time.

### Prerequisites

Below are the pre-requisates and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [NewsAPI](https://newsapi.org/)
2. Clone the repo
   ```sh
   git clone https://github.com/Lyrefox/ga-project4-news.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create `.env.local` file in root directory and enter your API
   ```env
   REACT_APP_NEWS_API_KEY=ENTER YOUR API
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

 -->

<!-- ROADMAP -->
## Roadmap

- [✔️] Render Top News Articles to Home Page
- [✔️] Add Top Articles Component
- [✔️] Write up test for Top Articles Component
- [✔️] Add route to second page
    - [✔️] Make search news as second page
- [✔️] Get redux working
    - [✔️] use redux with local storage to save favourite articles
    - [✔️] render favourite articles on new favourites page
    - [] add ability to unfavourite articles
- [] get tests running smoothly

See the [open issues](https://github.com/Lyrefox/ga-project4-news/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Lyrefox/ga-project4-news.svg?style=for-the-badge
[contributors-url]: https://github.com/Lyrefox/ga-project4-news/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Lyrefox/ga-project4-news.svg?style=for-the-badge
[forks-url]: https://github.com/Lyrefox/ga-project4-news/network/members
[stars-shield]: https://img.shields.io/github/stars/Lyrefox/ga-project4-news.svg?style=for-the-badge
[stars-url]: https://github.com/Lyrefox/ga-project4-news/stargazers
[issues-shield]: https://img.shields.io/github/issues/Lyrefox/ga-project4-news.svg?style=for-the-badge
[issues-url]: https://github.com/Lyrefox/ga-project4-news/issues
[license-shield]: https://img.shields.io/github/license/Lyrefox/ga-project4-news.svg?style=for-the-badge
[license-url]: https://github.com/Lyrefox/ga-project4-news/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/matthewlea175/
[product-screenshot]: public/site-image.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[JavaScript]: https://img.shields.io/badge/Javascript-JS-green
[JavaScript-url]: https://www.javascript.com/