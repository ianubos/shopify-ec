# ECOMMERCE

## Useful Resources
[Next.js Typescript Cheet Sheet](https://www.saltycrane.com/cheat-sheets/typescript/next.js/latest/)

## TODOS
- Enable all the functionalities of shopify
  - ~~get all products~~
  - ~~get category(collection) and tags~~
  - ~~get products by category(collection)~~
  - get tags by category(collection) -> skip
  - search products by keywords
  - sort products
  - checkout to cart
  - user login & logout
  - user storage & history

## Checkout
- Use fetches inside the React component, not getStaticProps so as to treat data in real time.

## Tech Stacks
- Next.js
- Typescript
- Tailwind.css
- Shopify Storefront API

## Citation
This project depends on [this vercel's ecommerce template](https://github.com/vercel/commerce/), especially with the part of shopify.
The template is robust to use, bug free data transfer method. 

## Structure
```
- assets
  CSS files here
- components
  Visual components here
- config
  SEO or something
- lib
- pages
  Next.js pages directory
- public
  Next.js public directory, images here
- shopify
  Shopify backend
- utils
  utilities here
```

## Still Remains Undecided...
- Any UI frameworks like Material UI or Ant Design?
- How to update items information while running the app? Next.js being built at the build time.
- How to get tags by collection?
