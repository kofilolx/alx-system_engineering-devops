# What happens when you type google.com in your browser and press Enter
![enter image description here](https://media.licdn.com/dms/image/D4D12AQE00CjiqXIJKA/article-cover_image-shrink_720_1280/0/1673221771197?e=2147483647&v=beta&t=ucTp68uKCq8b2r5TWq1OO2t9lMRPkoRTV3ESaczYXDE)
When you enter a website domain into your browser, you're invoking a global set of standards. Consider the process when you type "google.com" and press Enter. It's essential to understand this mechanism, starting with a simplified example.

Imagine entering "google.com" into your browser. This is streamlined because, for frequently visited sites like Google or Facebook, your browser already possesses the Internet Protocol (IP) addresses for these popular destinations.
An IP address functions like a physical address, pinpointing a specific location on the internet. Each website corresponds to an IP address, with the domain name serving as a user-friendly label for this numerical identifier. For instance, typing "35.226.21.195" into your browser achieves the same result as "google.com," but the latter is more memorable.
The association between a domain name and its IP address is facilitated by an A Record, a concept I'll delve into when discussing DNS. For now, recognizing that "35.226.21.195" equates to "google.com" suffices.
Typically, to ascertain a domain name's IP address, your computer accesses the internet to query a database containing these associations.
The browser prioritizes the IP address over the domain name, as long as there's a matching entry.
Considering the ubiquity of sites like Google, it's inefficient for browsers to query A Records for each visit. Hence, browsers are preloaded with domain-to-IP mappings for popular sites like Google, Facebook, YouTube, NYTimes.com, stored in cache memory. This cache memory optimizes data retrieval by storing frequently accessed information.

Furthermore, both the browser's cache and the computer's operating system maintain records of popular sites. If the browser lacks the IP address for a domain name in its cache, it will consult the operating system's cache for a potential match.

## Domain Name System
![dns record request](https://cf-assets.www.cloudflare.com/slt3lc6tev37/3NOmAzkfPG8FTA8zLc7Li8/8efda230b212c0de2d3bbcb408507b1e/dns_record_request_sequence_recursive_resolver.png)
What happens if neither the OS nor the browser holds the IP address of a domain name in cache memory? 
> Enter the Domain Name System.

Let’s use [google.com](google.com) as an example. It is a site used by hundreds of applicants to Holberton School every year and is probably visited a few thousand times a year. Given this, it is unlikely that your browser or OS will have the IP address that matches google.com in cache memory.

The act of pressing Enter with google.com now begins a complex set of communications that span the globe and involve dozens of stops along the way. This all takes place within the blink of an eye.

**The process I am about to explain occurs over a few hundred milliseconds.**
Once you’ve pressed Enter on google.com and the IP address is not in the Computer’s cache memory, the browser connects to the Domain Name System (DNS) through the Internet.
*     The Domain Name System is, in simple terms, the Internet’s phonebook. DNS is not one thing but a system of bookkeeping which allows browsers to match the IP address of any domain name. That’s a lot of domain names to keep track of, so the DNS works in steps.

**Step 1: Recursive DNS resolver**
Though your OS or browser may not have the IP address of google.com in its cache, the DNS Resolver may have it in its Database. Put; the Recursive DNS resolver is a database run by your Internet Service Provider (ISP). This could be a system run by Comcast or Verizon, but it is only the first stop in the DNS.

Let’s assume that the Recursive DNS resolver does not have the IP address for google.com. We move on to Step two. Note that some domain names have more than one IP address. Though the IP address may change, the domain never will not. The Domain Name System is an up-to-date index of those IP addresses.

**Step 2: DNS Root Name server**
The DNS Root Name server is stepped one if the ISP Resolver doesn’t have the IP address in storage. The Root is the .com or .gov, for example, but a site can have dozens of Root names. google.com uses the most popular Root name, .com. Root names are also referred to as Top Level Domain (TLD) because it is the first part of the lookup process using DNS.
There are 13 Root Name servers worldwide. 13 physical locations of servers with databases connect the domain name of whatever root name is in the domain name to its IP address.

** Step 3: TLD Nameserver **
The top level domain server (TLD) can be thought of as a specific rack of books in a library. This nameserver is the next step in the search for a specific IP address, and it hosts the last portion of a hostname (In example.com, the TLD server is “com”).

 **Step 4: Authoritative Name Server**
 Imagine you're playing a treasure hunt game where you have to follow clues to find the hidden treasure. In this game, the authoritative DNS server is like the person who knows exactly where the treasure is hidden.
When you type a website address into your browser, it's like giving a clue to find the treasure. The browser needs to know the exact location (the IP address) of the website to take you there. So, it asks different servers along the way, just like asking different people for clues in the treasure hunt.

The authoritative DNS server is the last stop in the game. It's the one with the final answer about where the website is located. It holds all the important information (like the treasure map) and can tell your browser exactly where to go without needing to ask anyone else. So, when your browser gets the answer from the authoritative DNS server, it can finally reach the website you want to visit.
Once the Root name is identified, the browser is directed to the Authoritative Name Server (ANS), the final destination in the domain name resolution process.

When Google LLC established google.com, they registered the domain name with a domain hosting company, assigning it an IP address through an A Record. This A Record serves as the primary domain name pointing to the associated IP address. While the convention often includes a "www" prefix, the Third Level Domain can vary.
Once registered, the domain name is mapped to the correct IP address within the hosting company's database. The Root-level name guides us to the appropriate ANS, which stores the IP address corresponding to google.com.
With the IP and domain name correctly mapped, the browser retrieves the requested content. It replaces the domain name with the IP address, enabling access to the static webpage hosted on the server associated with google.com's IP address.
Upon successful resolution, the browser stores the IP address of google.com in its cache memory. Subsequent attempts to access google.com will first check this cache, expediting the process by directly accessing the affiliated IP address.

A simplified diagram showing the DNS and connecting to the Server via the IP address.
![DNS](https://cf-assets.www.cloudflare.com/slt3lc6tev37/1NzaAqpEFGjqTZPAS02oNv/bf7b3f305d9c35bde5c5b93a519ba6d5/what_is_a_dns_server_dns_lookup.png)


## Exploring the Dynamics of Servers 
Ever wondered what goes on behind the scenes of your favorite websites? Let's dive into the world of servers!
At the core of it, a server is like a digital powerhouse, residing on the other side of the Internet from your device. Think of it as the engine that drives the functionality of websites like Google or Amazon. But how does it all come together?![Servers](https://www.racksolutions.com/news/app/uploads/AdobeStock_90603827-scaled.jpeg)

Let's break it down using Amazon.com as an example. When you browse Amazon, what you see is a mix of static content (like headers and footers) and dynamic elements (like product descriptions and reviews). These are served up by different components working in harmony:

- **Web Server:** This part handles the static content, presenting the basic structure of the site using HTML and CSS. It's like the framework of a building, setting the stage for everything else.

- **Application Server:** Here's where the magic really happens. The application server processes codebase, JavaScript, and other dynamic elements, making the site interactive and functional. This is where features like e-commerce transactions and user reviews come to life.

- **Database:** Last but not least, we have the database. This is where all the juicy data lives, from product details to customer reviews. When you click on a product, the application server fetches the relevant information from the database and serves it up to your browser.
*			But wait, there's more! As websites grow in popularity, they need more horsepower to keep up with demand. That's where scalability comes into play. By adding more servers to the mix and using tools like load balancers, sites can handle higher traffic volumes without breaking a sweat.

- **Load Balancer:** Think of this as the traffic director, distributing incoming requests across multiple servers to ensure optimal performance. If one server goes down, the load balancer redirects traffic to the others, keeping the site up and running smoothly.

From static content to dynamic functionality, servers play a vital role in delivering the online experience we've come to expect. So the next time you click "Add to Cart," remember the army of servers working behind the scenes to make it happen!

 **Web Server**
The web server is a distinct part of a server setup. Often used interchangeably with Server, the Web Server is responsible for displaying the markup language, HTML and CSS, as the static website. Since every browser automatically runs HTML and CSS, this server part displays the website’s look but rarely includes any functionality. That comes with the Application Server.

**Application Server**
The Application Server is responsible for compiling the site’s Codebase, any non-HTM, CSS, or Javascript code that the site needs to run its non-static components. The reason that Javascript is omitted is that it is standard for every browser to run Javascript without any 3rd party tools.
The Codebase is often PHP, but Java Applets were run through the application server in the past. Technically, any language could be run through the App Server, even C, but in practice, most sites use the newest languages for their Codebase.
In our Amazon example, the Codebase is seen in the e-commerce functionality, and how reviews are handled and pictures are displayed.

**Database**
![Illustrative](https://media.licdn.com/dms/image/D4D22AQGlUWabXvPkfA/feedshare-shrink_2048_1536/0/1697347941241?e=2147483647&v=beta&t=H29hRDdHWJNn9cbQsXki2MOaLXqNOBfQljlcoqCsQVU)
The Database (**DB**) is the last component of a server. Simply put, a DB is a structured set of data held in a computer, especially one that is accessible in various ways.
Most often, the DB holds data needed to make a site functional. For Amazon, the product description, images, and reviews are kept in a large database. When a particular product is chosen, the associated information and reviews are queried in the Database by the Application Server.
Together the DNS tells the browser what the IP address is, and the Client is connected to a Server via its IP address. Then the different server components work together to present a live, functional website.
- **Scalability**
So far, we have covered the Domain Name System and Servers, but there are additional elements on the server end. These elements include the load balancer, SSL Certificate, and Firewall.
Once a site becomes more highly trafficked, it is time to add additional power to your site. This is done by adding more servers to the site. This helps increase the number of visits that the site can accommodate and helps keep downtime to a minimum when updating the Codebase (When one Server is done, a backup server is still hosting the site). 
When a website is scaled up with more servers, additional concerns become balancing the workload between servers. Also, increased traffic means increased chances of infiltration by hackers, so security becomes paramount.

**Load Balancer**
A [load balancer](nginx.com) is used when one website (domain name or IP address) uses more than one Server. The load balancer is the front-facing program that acts as a filter between the Client, the Internet and the Server.

A load balancer acts as the “*traffic cop*” sitting in front of your servers and routing client requests across all servers, capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked, which could degrade performance. If a single server goes down, the load balancer redirects traffic to the remaining online servers. When a new server is added to the server group, the load balancer automatically starts to send requests to it.

**Typical load balancer setup**
![Load balancer](https://miro.medium.com/v2/resize:fit:1012/1*0_AxDGA6rGF8ESMifA6j8w.gif)

Load balancers use special algorithms to direct traffic between servers. These are some of the algorithm designs used in load balancing:
***Round Robin*** (sometimes called “Next in Loop”).
- Weighted Round Robin — as Round Robin, but some servers get a larger share of the overall traffic.
- Source IP hash*. Connections are distributed to backend servers based on the source IP address. Suppose a Webnode fails and is taken out of service; the distribution changes. As long as all servers are running, a given client IP address will always go to the same web server.

- URL hash*. Much like source IP hash, except hashing is done on the URL of the request. Useful when load balancing in front of proxy caches, as requests for a given object will always go to just one backend cache. 
This avoids cache duplication, having the same object stored in several servers / *all caches*, and increases the effective capacity of the backend caches. ![Hashing](https://miro.medium.com/v2/resize:fit:1400/1*ug_v4qLamd3SurmLLW1oQw.gif)
- Least connections, weighted least connections. 
The load balancer monitors the number of open connections for each Server and sends it to the least busy Server.
- The least traffic weighted the least traffic. The load balancer monitors the bitrate from each Server and sends it to the Server that has the least outgoing traffic.
- Least latency*. Perlbal makes a quick HTTP OPTIONS request to backend servers and sends the request to the first Server to answer.

#### References

 1. [What Is Load Balancing? How Load Balancers Work](https://www.cloudflare.com/learning/dns/what-is-dns/)
2. [Load balancing refers to efficiently distributing incoming network traffic across a group of backend servers,](www.nginx.com)
3. [Database](en.wikipedia.org)
4. [Server (computing)](en.wikipedia.org)
5. [What is a DNS Resolver?](www.computerhope.com)
6. [What kind of load-balancing algorithms are there?](serverfault.com)
7. [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/)

[*Watch this video also..*](https://www.google.com/url?sa=i&url=https://m.youtube.com/watch?v=dh406O2v_1c&psig=AOvVaw3pApYWtqb3SunzIRfIHzsP&ust=1715507440156000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCMC6sbKphYYDFQAAAAAdAAAAABAm)
