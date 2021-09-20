# ECOMMERCE

## Ideas
- Collection and its descendants... Product Type -> petg, pla, ... and Collection can take its product types.

## Useful Resources
[Next.js Typescript Cheat Sheet](https://www.saltycrane.com/cheat-sheets/typescript/next.js/latest/)
[useCallback & useRef use case](https://stackoverflow.com/questions/62486028/how-do-i-properly-use-useeffect-for-a-async-fetch-call-with-react-react-hooks-e)

## TODOS
- Enable all the functionalities of shopify
  - ~~get all products~~
  - ~~get category(collection) and tags~~
  - ~~get products by category(collection)~~
  - get tags by category(collection) -> skip -> delete
  - get products by product type sorted by collecction
  - ~~search products by keywords~~
  - ~~user login & logout~~
  - ~~create, add & remove product in cart~~
  - ~~checkout to cart~~
  - ~~associate customer profile with cart~~
  - update customer information to buy
  - user storage & history
  - sort products

## TODOS on Frontend
- Use fetches inside the React component, not getStaticProps so as to treat data in real time.
- Load or Create checkout id when the website is loaded because some functions like use-add-item.tsx are created on the fact that the checkout id exists.

## Cart function
Shopify cart is not connected to the customer information...
Another methods:
- Only local storage
- Use server database that holds user's id and cart items' ids
   
Use local storage in case that the user doesn't login
Use shopify cart function in case that the login user
Shopify cart has items -> After login, delete local storage
Shopify cart has no items -> Update cart with local storage, then delete it

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
- UI: Any UI frameworks like Material UI or Ant Design?
- Operation: How to update items information while running the app? Next.js being built at the build time.
- Functionality: How to get tags by collection?
- Use local storage for non-login user & cart data for login user??
  Cart functionality was added resentlly??  https://shopify.dev/custom-storefronts/cart


## Errors while developing
- Cache error
```
ChunkLoadError: Loading chunk node_modules_next_dist_client_dev_noop_js failed
```
Try removing .next directory.

## TODOS OF PRODUCTION
Change customer activation url
https://shopify.dev/custom-storefronts/customer-accounts#activate-a-customer


