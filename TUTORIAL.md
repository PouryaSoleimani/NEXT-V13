## NEXT - 13 - APP ROUTER - TUTORIAL

<!-- ^ APP ROUTING -->
1 - instead of index.tsx  , we must use page.tsx in every route , and again we use folders and files to define routes and subroutes ==> about/page.tsx

2 - EVERY SINGLE PAGE must have its own folder and a file named app.tsx / a folder can't contain more than a page

<!-- ^ DYNAMIC ROUTES -->
3 - To create dynamic pages we name the folder with [] and then insert a page.tsx in the folder

4 - to access the params data in a dynamic page in APP ROUTER  , we must get the params in components props and access the keyword of it

<!-- ^ NESTED ROUTES -->
5 - by adding folders (dynamic or static) in other folders , we will have nested routes --> proudcts/[id]/singleproduct/page.tsx

