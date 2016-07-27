
Day 12
------
In our blog, we used RESTful routes to interact with the Github API. It's time to take this a step further and integrate this functionality into your portfolio project.

To get started, you will need to create a controller that includes a call to the Github API. This call should grab data about your individual account, and render portions of the returned content to the page, once the data has been loaded. This is fairly open ended, so use whatever data you deem fit and be sure to separate your concerns.

Technical Requirements and Grading Rubric

Ensure your code passes ESLint.
Place all code within the proper layer of MVC abstraction and encapsulation.
Use an authenticated ajax call to GitHub's API to get data from the API.
Keep your portfolio responsive as it displays API data.
DO NOT publish your GitHub Token to any public repo.

Day 11
------
We converted the blog into a SPA (Single Page Application) by using the page.js library to capture clicks and execute a function to modify the page, rather than reloading content from a server.

Give your portfolio the same treatment. Update your main nav so that each clickable item is a link to a different url, that is handled by a function as indicated by page.js.

Keep your code organized in a M-V-C structure that isolates data management from presentation layer, from the controller that holds it all together.


Day 6
------
User Stories: MVP
As a developer, I want to store my project data in a .json file, so that I can keep it organized.
As a developer, I want to retrieve that source data file asynchronously, so that my app logic gets the data just when I need it.

User Stories: Stretch Goals
As a reader, I only want to have to fetch data when it's updated (and keep it cached locally), so that I don't make unneeded AJAX calls.


Day 5
------

Partner code review.

Day 4
------

User Stories: MVP

As a developer, I want to use Handlebars for my project template, so that I can include new projects more easily.
As a developer, I want my CSS styles to follow SMACSS organization, so that I know where to look for creating and editing styles.
User Stories: Stretch Goal

As a visitor, I want the site to use great typography, so that I have an enjoyable reading experience.
Set up your h1, h2, h3 elements according to a type scale.
Include some good fonts, that work well together.

Day 3
------
User Stories: MVP

- As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST. This means your links to NOT navigate to a new page. Instead, your "single page app" shows only the section related to the navigation tab that is selected. You can use 'data-' attributes to associate a content section with a particular tab Then use jQuery so when the tab is clicked, you hide all the sections, then reveal the associated section only.
- As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.

Stretch Goals:

As a reader, I want any lengthy descriptions truncated to the first paragraph so that I can easily scroll though the whole list.
As a reader, I want to click the "More" button so that I can expand the entire description.
As a reader, I want projects filterable by category so that I can review just the things that interest me.

Day 2
------
User Stories: Minimum Viable Product (MVP)

Let these user stories guide your development:

As a developer, I want my site to use valid and semantic markup, so that employers will love me.
As the creator, I want the page to link to my social and GitHub pages, so that visitors can follow me, and I can build my audience.
As a developer, I want portfolio items displayed with a repeatable template, so that I can reuse it, and abstract out the details for individual projects.
As a developer, I want my CSS organized (think SMACSS) so that I can find my stylings swiftly.

Day 1
------
As an employer, I want the portfolio site I visit to convey meaningful information about the person I might be hiring.

As a user, I want the portfolio site I visit to have a clean, modern design free of popups, notifications and any other unnecessary annoyances.  

Base user stories from the assignment:

As a developer, I need my site to use valid and semantic markup, so that employers will love me.
As the creator, I need the page to link to my social and GitHub pages, so that visitors can follow me, and I can build my audience.
As a visitor, I want the viewport properly sized, so that content fits all the size I have available.
As a visitor, I want the primary nav to be responsive with a menu, so that I can get around using any device.
