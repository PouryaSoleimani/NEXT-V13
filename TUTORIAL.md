## NEXT - 13 - APP ROUTER - TUTORIAL

<!-- & APP ROUTING -->
1 - instead of index.tsx  , we must use <<page.tsx>> in every route , and again we use <<folders and files>> to define routes and subroutes ==> about/page.tsx

2 - EVERY SINGLE PAGE must have <<its own folder>> and a file named <<page.tsx>> / a folder can't contain more than a page

<!-- & DYNAMIC ROUTES -->
3 - To create dynamic pages we name the folder with <<[]>> and then insert a <<page.tsx in the folder>>

4 - to access the params data in a dynamic page in APP ROUTER  , we must get the params in components props and access the keyword of it

<!-- & NESTED ROUTES -->
5 - by adding folders (dynamic or static) in other folders , we will have nested routes --> proudcts/[id]/singleproduct/page.tsx

<!-- & ROUTE GROUP -->
6 - With route group we can Divide our routes to different groups and its so easier for bigger projects
-- To define a route group we should make a folder and put the name in paranthesis like -> (adminpanel)/pages.tsx
-- the { <<ROUTE GROUP>> } folders doesnt count in routing , it means in the example above , we wont have a /adminpanel route


<!--& SLUGS IN NEXT V-13  -->
7 - for slug pages we use [] and ... together for folder names  , like : [...search]

<!-- & LAYOUT.TSX FILE IN APP ROUTER -->
8 - <<LAYOUT.TSX>> File is like -app.tsx file in {FILE ROUTER} but we use <<regular html tags>> in it
-- We can also create custom layouts for different routes . for example if we set a layout for one route , all of the subroutes will receive that layout
---- to create a custom layout for a special route , we must create a {layout.tsx} file in the folder , and do just like the main {layout.tsx} page 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- & SERVER COMPONENTS AND CLIENT COMPONENTS -->

<!-- ? A - SERVER COMPONENTS -->
9 - by default , every component is a server component and it is rendered in server side and then delivered to the browser
-- thats why in every default component our logs will be displayed in the server side , and not in the browser 
** server components are SSR , and every default component is a server component **

<!-- ! B - CLIENT COMPONENTS -->
--HINT : We dont have functions like <<GETSTATICPROPS>> or <<GETSERVERSIDEPROPS>> in app-routing , instead we use <<"USE CLIENT">> for client component and if we dont use anything , our component will be a server component by default

<!-- & WHEN TO USE EACH COMPONENT -->
10 - USE << SERVER COMPONENTS >> vs << CLIENT COMPONENTS >> documentation of the official next.js website
--- We always use <<CLIENT COMPONENTS >> if only we want to have <<ONCLICK>> or other eventlisteners , or if we have <<REACT HOOKS>> , or if we have <<BROWSER APIs>>
--- Otherwise , <<WE ALWAYS USE SERVER COMPONENTS>>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!--& NEW CACHE METHOD IN NEXT V-13  -->
11 - When we do a <<DATA FETCHING >> in next.js  , next will save our response in <<CACHE>> and will use it again from cache if we do that same fetching again
<!-- ? HINT 1 : EVERY PAGE AND COMPONENT IN NEXT.JS , BY DEFAULT IS : (( SSG AND SERVER COMPONENT )) -->
<!-- ? HINT 2 : EVERY PAGE IS SSG AND WILL FETCH OUR DATA AND USE IT AS STATIC HTML TAGS BY DEFAULT -->

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- & SSR & ISR IN NEXT V-13 -->
12 - To use SSR & ISR in data fetching , we must send a second prop to our fetch :

<!-- ! SSG -->
 - <<force-cache>> --> fetch('/api' ,`{ cache : "force-cache" }`) --> <<SSG>> --> here we are having a fetching like <<GETSTATICPROPS>> in file-router , this type is just similar to <<SSG>> and its default in next.js.

<!-- ! SSR -->
 - <<no-store>> --> fetch('/api' , `{ cache : "no-store" }`) --> <<SSR>> --> here we are having a fetching like <<GETSERVERSIDEPROPS>> in file-router , this is just similar to <<SSR>>.
  
<!-- ! ISR -->
 - <<next : { revalidate : 10 }>> --> fetch('/api', {next : { revalidate : 10 } } ) <<ISR>> --> use this instead of cache , for the second parameter in fetch , to perform and <<ISR>> rendering

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- & NESTED CLIENT AND SERVER COMPONENTS -->
13 - We can import and use <<SERVER COMPONENTS>> and <<CLIENT COMPONENTS>> in eachother
<!-- ? HINT : NEVER USE A CLIENT COMPONENT IN A SERVER COMPONENT , IT WILL CAUSE PERFORMANCE DERCREASING -->
<!-- ? HINT : NEVER MAKE A LAYOUT PAGE A CLIENT COMPONENT BECAUSE IT MAKES ALL OF THE NEXT PAGES TO CLIENT COMPONENTS -->
<!-- ? HINT : ALWAYS MAKE (( LEAFS )) CLIENT COMPONENTS AND THEN IMPORT THE LEAF FILES IN ROOT FILES  -->

<!-- & STREAMING IN NEXT.JS  -->
14 - Streaming is a act of showing custom loading in the page UI , until our fetch function or any other timing functions is completed,
-- this action in next.js is called Streaming , to implement streaming in a page , we must use <Suspense></Suspense> JSX tags.
-- these <Suspense> Tags accept a parameter , called fallback and in the value of fallback we can put the Tag or Loading Component