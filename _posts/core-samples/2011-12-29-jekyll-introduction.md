---
layout: post
category : [lessons]
tags : [intro, beginner, jekyll, tutorial]
---
{% include JB/setup %}

This Jekyll introduction will outline specifically  what Jekyll is and why you would want to use it.
Directly following the intro we'll learn exactly _how_ Jekyll does what it does.

# What is Jekyll?

## What is Jekyll?

### What is Jekyll?

#### What is Jekyll?

##### What is Jekyll?

**Jekyll is a parsing engine.**

- Ability to write content in markdown or textile in your favorite text-editor.
- Ability to write and preview your content via localhost.
- No internet connection required.
- Ability to publish via git.
- Ability to host your blog on a static web-server.
- Ability to host freely on GitHub Pages.
- No database required.

(read more: <https://github.com/mojombo/jekyll/wiki/Usage>)

{% capture text %}...
<body>
  <div id="sidebar"> ... </div>
  <div id="main">
    |.{content}.|
  </div>
</body>
...{% endcapture %}

[Liquid](https://github.com/Shopify/liquid) is a secure templating language developed by [Shopify](http://shopify.com).

<blockquote>
Please take a look at [{{ site.categories.api.first.title }}]({{ BASE_PATH }}{{ site.categories.api.first.url }}) 
or jump right into [Usage]({{ BASE_PATH }}{{ site.categories.usage.first.url }}) if you'd like.</blockquote>