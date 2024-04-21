# Web Infrastructure Design
-------------------------

This project revolves around designing a robust web infrastructure, progressing from a simple setup to a more complex and scalable architecture. Here's a technical breakdown of each stage:

### 0-simple_web_stack

#### Overview:

- **Objective**: Design a basic web infrastructure to host `www.foobar.com`.

- **Components**:

- 1 Physical Server.

- 1 Web Server (Nginx).

- 1 Application Server.

- 1 Set of Application Files.

- 1 Database (MySQL).

- **Configuration**:

- Domain Name: `foobar.com` with a `www` record pointing to server IP `8.8.8.8`.

- **Flow**:

- User accesses `www.foobar.com`.

- DNS resolves `www.foobar.com` to server IP `8.8.8.8`.

- Nginx handles incoming requests and forwards dynamic content to the Application Server.

- Application Server processes requests and interacts with the MySQL database.

- Static content served directly by Nginx.

### 1-distributed_web_infrastructure

#### Overview:

- **Objective**: Enhance the infrastructure for scalability and redundancy.

- **Additional Components**:

- 2 Physical Servers.

- 1 Load Balancer (HAproxy).

- **Changes**:

- Load Balancer distributes incoming traffic between multiple servers.

- High Availability introduced with redundant servers.

- **Flow**:

- Load Balancer routes requests to available servers.

- Redundancy ensures continuous service even if one server fails.

### 2-secured_and_monitored_web_infrastructure

#### Overview:

- **Objective**: Strengthen security and introduce monitoring capabilities.

- **Additional Components**:

- 3 Firewalls.

- SSL Certificate for HTTPS encryption.

- Monitoring Clients (e.g., Sumo Logic).

- **Changes**:

- Firewalls bolster security by filtering incoming and outgoing traffic.

- SSL Certificate enables encrypted communication (HTTPS) between clients and servers.

- Monitoring clients gather data for performance and security analysis.

- **Flow**:

- Firewalls filter and monitor network traffic.

- SSL encryption secures data transmission.

- Monitoring clients track system performance and security events.

### 3-scale_up

#### Overview:

- **Objective**: Further scale the infrastructure to handle increased traffic.

- **Additional Components**:

- 1 Additional Physical Server.

- Clustered Load Balancers (HAproxy).

- **Changes**:

- Server capacity expanded to accommodate growing demand.

- Load balancers configured as a cluster for load distribution and redundancy.

- **Flow**:

- Additional server resources handle increased traffic load.

- Load balancer cluster ensures efficient distribution of requests across servers.