# RBOR website info!

Info on why Jekyll is cool, what Jekyll does, and how to set up your own Jekyll site locally and on GitHub Pages is [in my *Programming Historian* lesson](http://programminghistorian.org/lessons/building-static-sites-with-jekyll-github-pages).

**Skip to a section:**

* [Tasks](https://github.com/amandavisconti/RBORsite#tasks)
 
* [I just want to blog](https://github.com/amandavisconti/RBORsite#i-just-want-to-blog)

* [And a markdown cheatsheet would help](https://github.com/amandavisconti/RBORsite#markdown-cheatsheet)

* [Local work](https://github.com/amandavisconti/RBORsite#local-work)
 
* [Live site](https://github.com/amandavisconti/RBORsite#live-site)

## Accessibility

This website is committed to accessibility for all users. For detailed information about our accessibility features and how to use the site with assistive technologies:

* [Accessibility Statement](ACCESSIBILITY.md) - How we support users with disabilities
* [Testing Guide](TESTING.md) - Comprehensive testing procedures
* [Privacy Policy](PRIVACY.md) - How we protect your data

We aim to meet WCAG 2.1 Level AA standards and welcome feedback on accessibility at info@beanandnothingness.com.

## Tasks
Stuff we need/want to do for the website.

*Sooner:*
- [ ] Change team section from bullets to avatars and short bios
- [x] Video time!

*Later:*
- [ ] C++ syntax highlighting should be automatic via Rouge, but isn't working for some reason
- [ ] Change 4 social buttons (under blog posts) to shades of red/dusky purple
- [ ] Test webapp icon on mobile homepage
- [ ] Google Analytics: advanced site setup (e.g. tie button clicks/downloads to analytics?)
- [ ] Twitter profile text, finesse avatar/header image, change email to RBOR Games/B&N email

*Done:*
- [x] Get email field => Google Sheet working; share sheet with team
- [x] Remove typing (for now)
- [x] Readme info on how to blog
- [x] @RBORgames profile customize (added avatar and header image from title screen image, went through settings)
- [x] Blog page => each post in full (or expandable excerpt), rather than list of titles PLUS include email-linked author name with each post
- [x] After domain setup, check that Google Analytics is filling correctly
- [x] Created separate dev repo (only needed for testing things accessing web like email field->Google forms, otherwise test locally)
- [x] Check the RSS feed is generating correctly (http://beanandnothingness.com/feed.xml)

## I just want to blog

You'll need to create a new file in _posts, using the same naming convention (e.g. 2016-05-9-title-using-hyphens-does-not-need-to-match-post-title.md) and including the same header info inside the file:
1. change the title
2. write one of the following tags: news, development, or release (I can set up others if you want them)
3. make the author line say either nic or jordan (just first name, lowercase)

You can either create this file locally and then push it to the repo (and it'll appear on the site in a few seconds), or you can [visit the _posts folder in this repo](https://github.com/amandavisconti/RBORsite/tree/master/_posts) and use the "create new file" button to write and immediately publish your post.

## Markdown cheatsheet

You can style just ```code that appears inline``` if you want, or you can...
```
Create a whole block of code
Tooooooo
Just—like—this
```

The following markdown:
```
### Post non-title header
#### Subheader below that, etc.

* Bullets!
* Bullets bullets!
  * Bullety Bullets
* Etc.

1. Ordered list
1. Here's number 2! (you should also be able to type 2. instead of 1. but it could work for both)

For external links:
[A familiar website](http://www.google.com)
Don't forget the http:// in your links or the site will append the link to the blog URL

For external images (not in our website repo):
![](https://www.usa.gov/sites/all/themes/usa/images/Logo_USA.png)

**Important bold information!**
*Italics just get one asterisk on either side.*
For internal links and images (blog post, code, file, etc. that lives in the website directory), you should do something different (which won't work in this README, but will work on your local version of the site and on the Jekyll-generated site):

![]({{ site.baseurl }}/img/teleport.gif)

Note I used {{ site.baseurl }} in that link instead of the full http://beanandnothingness.com/img/teleport.gif
That lets internal links and images work both when working on the site locally and on the live site, instead of breaking on one or the other.
```

### Post non-title header
#### Subheader below that, etc.

* Bullets!
* Bullets bullets!
  * Bullety Bullets
* Etc.

1. Ordered list
1. Here's number 2! (you should also be able to type 2. instead of 1. but it could work for both)

For external links:
[A familiar website](http://www.google.com)

Don't forget the http:// in your links or the site will append the link to the blog URL

For external images (not in our website repo):

![](https://www.usa.gov/sites/all/themes/usa/images/Logo_USA.png)

**Important bold information!**
*Italics just get one asterisk on either side.*
For internal links and images (blog post, code, file, etc. that lives in the website directory), you should do something different (which won't work in this README, but will work on your local version of the site and on the Jekyll-generated site):

![]({{ site.baseurl }}/img/teleport.gif)

Note I used {{ site.baseurl }} in that link instead of the full http://beanandnothingness.com/img/teleport.gif
That lets internal links and images work both when working on the site locally and on the live site, instead of breaking on one or the other.

## Local work
You only need to work locally if you want to try stuff not on the live production (public) or dev sites. If you want to do this, you'd need to install some stuff locally using [my *Programming Historian* lesson](http://programminghistorian.org/lessons/building-static-sites-with-jekyll-github-pages).

```cd``` to your GitHub/RBORsite folder

```bundle exec jekyll serve --watch```

Open localhost:4000 in browser (or http://127.0.0.1:4000)

* See changes on the local site as you make them: While the site is running, after making changes to website files: save the files and refresh the webpage to see the changes—except for the _config.yml file, for which you must stop running the website and restart running the website to see changes.

* Stop local site: Hit control-c on the command line.

## Live site

To move local changes to your live site (new post, settings tweak, etc.):

* Make the desired changes to your website’s local files.

* Open the GitHub Desktop app, make sure your website is chosen in the left sidebar’s list of repositories, and write your commit message summary (and description if desired).

* Click “Commit to gh-pages” in the lower left.

* After the commit has completed, click “Sync” in the upper right.

* Allow 10-90 seconds for your changes to reach GitHub’s web servers, then visit your website and refresh the page to see your changes live. If the change isn't showing up after that, check your email for a failed build message (I will add everyone as repo collaborators and I think that should let you get these notifications?).
